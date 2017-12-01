
	
	
	 
class cartas3{
	 constructor(){
	 	this.carta1=false;
	 	this.carta2=false;
	 	this.carta1_id=false;
	 	this.carta2_id=false;
	 	this.pareja=0;

	 	/*array y array duplicado*/		
	 	this.baraja=["animales/caballo.jpg","animales/cocodrilo.png","animales/gato.png","animales/leon.png",
		"animales/perro.png","animales/raton.jpg"];

		this.baraja2=this.baraja.slice(0);

		for(var i=0; i<6; i++){
			this.baraja2.push(this.baraja[i]);
		}
	}
	/*funcion para dar la vuelta a las cartas(si son parejas da la vuelta si no son pareja vuelve cada una a su estado inicial)*/
	 da_la_vuelta(id){
	 	if(this.carta1==false){
			// Si es la primera carta
			this.carta1 = document.getElementById("boca_abajo"+id).src=this.baraja2[id];
			this.carta1_id=id;	
		}else if(this.carta2==false){
			// Es la segunda carta
			this.carta2 = document.getElementById("boca_abajo"+id).src=this.baraja2[id];
			this.carta2_id=id;
			
			// ¿Son las dos cartas iguales?
			if(this.carta1==this.carta2){
				this.carta1=false;
				this.carta2=false;
				this.pareja++;
			}else{
				setTimeout(function(){
					cartas.carta1=false;
					document.getElementById("boca_abajo"+cartas.carta1_id).src="animales/carta_boca_abajo.jpg";
					cartas.cartas2=false;
					document.getElementById("boca_abajo"+cartas.carta2_id).src="animales/carta_boca_abajo.jpg";
				},1000);
				this.carta1=false;
				this.carta2=false;

			}
			/*llamamos a la funcion detener(); para cunado llegue al maximo de seis parejas se detenga el juego
			con ello contamos con la variable this.pareja la cual va aumentando cada vez que el valor del array coincide*/
			this.detener();
		}
	} 
	/*esta funcion sirve para ver el tiempo que se tarda en terminar el juego*/
	 cronometro(){ 
		 	this.segundos=0;
		 	this.minutos=0;
			var s=document.getElementById("segundos");
			var m=document.getElementById("minutos");
		 	this.tiempo=setInterval(function(){
									if(cartas.segundos==60){
										cartas.segundos=0;
										cartas.minutos++;
										m.innerHTML=cartas.minutos;
											if(cartas.minutos==0){
												cartas.minutos=0;
											}
									}
									cartas.segundos++;
									s.innerHTML=cartas.segundos;
								},1000);
	}
	/*funcion para barajar el array de this.baraja2 el cual pasamos los valores desde el constructor();*/
	shuffle(a){
    		for (i = a.length - 1; i > 0; i--) {
    			var j, x, i;
        		j = Math.floor(Math.random() * (i + 1));
        		x = a[i];
        		a[i] = a[j];
        		a[j] = x;
    		}	
		}
		/*funcion para detener el juego.Se cumple cuando se ha completado las coincidencias de las seis parejas.ejecuta la funcion shuffle() y 
		mediante un document.write() se escribe el tiempo que se ha tardado en completar el juego y un boton para comenzar de nuevo la partida.*/
	detener(){
			if(this.pareja==6){
				clearInterval(this.tiempo);
				document.getElementById("juego").innerHTML="has ganado:tu tiempo ha sido de <trong>"+this.minutos+"</strong> minutos y <trong>"+this.segundos+
				"</strong> segundos<br> <input type='button' id='comenzar' onclick='cartas.comenzar_de_nuevo();' value='comenzar de nuevo'>";
				this.shuffle();
			}	
	}
	comenzar_de_nuevo(){
		location.href ="juego_de-cartas.html";
	}
}

	cartas = new cartas3();
	cartas.shuffle(cartas.baraja2);
	







	


	
	



	
