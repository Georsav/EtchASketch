const bodyDiv = document.querySelector(".bodyDiv");
const slider = document.getElementById("slider");
const sliderOutput = document.getElementById('sliderValue')
const pxlContainer = document.getElementById("sketchContainer");

function createPxl(side, pxlClassName) {
    var element = document.createElement("div");
    element.className = pxlClassName;
    //element.style.width = 640/side;
    //element.style.height = 640/side;
    return element;
}

function removeElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    let k = Math.round(640/this.value);
    pxlContainer.style.width = k*this.value + "px";
    pxlContainer.style.height = k*this.value + "px";
    sliderOutput.innerHTML = this.value + " x " + this.value;
    let imax = this.value * this.value + 1;
    removeElements(pxlContainer);
    
    for (let i = 1; i < imax; i++) {
        pxl = createPxl(this.value, "pxlitem");
        pxlContainer.appendChild(pxl);
    }

    pxls = document.getElementsByClassName("pxlitem");
    for (let j = 0; j < pxls.length; j++) {
        pxls[j].style.width = k + "px";
        pxls[j].style.height = k + "px";
    } 
    document.querySelectorAll(".pxlitem").forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add("newpxl");
        });
    });

    if (document.querySelector(".clearBtn") != null) {
        document.querySelector(".clearBtn").remove();
    }
    clearBtn = document.createElement("button");
    bodyDiv.appendChild(clearBtn);
    clearBtn.className += "clearBtn"; 
    clearBtn.innerHTML = "Clear";
}


 
