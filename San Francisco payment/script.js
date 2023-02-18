const myImp = document.getElementById("myImp");
const btnCopy = document.getElementById("btnCopy");
const myImpp = document.getElementById("myImpp");
const btnCopyy = document.getElementById("btnCopyy");
const myImppp = document.getElementById("myImppp");
const btnCopyyy = document.getElementById("btnCopyyy");
const myImpppp = document.getElementById("myImpppp");
const btnCopyyyy = document.getElementById("btnCopyyyy");
const myImppppp = document.getElementById("myImppppp");
const btnCopyyyyy = document.getElementById("btnCopyyyyy");
let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
	product.onclick = () => {
		previewContainer.style.display = "flex";
		let name = product.getAttribute("data-name");
		previewBox.forEach((preview) => {
			let target = preview.getAttribute("data-target");
			if (name == target) {
				preview.classList.add("active");
			}
		});
	};
});

previewBox.forEach((close) => {
	close.querySelector(".close").onclick = () => {
		close.classList.remove("active");
		previewContainer.style.display = "none";
	};
});

btnCopy.onclick = function () {
	myImp.select();

	document.execCommand("Copy");
};
btnCopyy.onclick = function () {
	myImpp.select();

	document.execCommand("Copy");
};
btnCopyyy.onclick = function () {
	myImppp.select();

	document.execCommand("Copy");
};
btnCopyyyy.onclick = function () {
	myImpppp.select();

	document.execCommand("Copy");
};
btnCopyyyyy.onclick = function () {
	myImppppp.select();

	document.execCommand("Copy");
};
