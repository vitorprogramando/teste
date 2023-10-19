const prinbtn=document.getElementByld("printbtn");
			printbtn.addEventListener("click",()=>{
				printbtn.disabled = true;
				window.print();
				setTimeout(() => {
					printbtn.disabled=false;
				}, 1000);
			});