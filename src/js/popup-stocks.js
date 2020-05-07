import Cookies from "js-cookie";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function(){
	if (
		!Cookies.get("popup-stocks")
		&& document.querySelector("#popup-stocks")
	)
		setTimeout(() => {
			$.fancybox.open({
				src: "#popup-stocks",
				beforeShow(){
					document.body.classList.add("js__stock-popup_showed");
				},
				afterClose(){
					document.body.classList.remove("js__stock-popup_showed");
					Cookies.set("popup-stocks", "true");
				}
			});

			// const popupLink = document.querySelector(".popup-stocks__link");

			// if (!popupLink) return;
			
			popupLink.addEventListener("click", () => {
				Cookies.set("popup-stocks", "true");
			});
		}, 300)

});