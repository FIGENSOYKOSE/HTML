let Groceries = []; 
function addGroceries(){
    console.log(document.getElementById("txtGroceries").value); 
    if(document.getElementById("txtGroceries").value == ""){
        return; 
        
    }
    
    Groceries.push(document.getElementById("txtGroceries").value);
    
    document.getElementById("txtGroceries").value = ""; 
    console.log(Groceries);
    
    printGroceries();
}
function deleteGroceries(arrayindex){
    console.log("Delete Groceries" + Groceries [arrayindex]);
    
    Groceries.splice(arrayindex,1);
    console.log(Groceries);
  
   printGroceries();
}
function printGroceries(){
     
     let strgroceryList= "<ol>";
    
    for(let i =0;i<Groceries.length;i++){
        strgroceryList += "<li>" + Groceries[i] + " <button id='btnDelete' onclick='deleteGroceries(" + i + ")'>Delete</button></li>";
    }
    strgroceryList +="</ol>" ;
    document.getElementById("divgroceryList").innerHTML = strgroceryList; 

}

function deletegroceryList()
{
   console.log("Delete groceryList");
    
   Groceries.splice(0,Groceries.length);

    printGroceries();
}


