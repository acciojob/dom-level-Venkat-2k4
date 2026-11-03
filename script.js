//your JS code here. If required.
 const element = document.getElementById("level");
        let current = element
        let level = 0;
        while(current){
            level+=1;
            current = current.parentElement;
        }
alert("The level of the element is: "+level)