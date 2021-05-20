var dataSt=firebase.database().ref("student")
var stList=[]

dataSt.on('child_added',function(getdata){
    var abc=getdata.val()
    stList=[]
    stList.push(abc)
   // console.log (stList)
   fillTable()
})

function fillTable(){
    var tableStudent=document.getElementById('tableStudent')

    for(i=0;i<stList.length; i++){
        var tr=document.createElement('tr')
          
        var td=document.createElement('td')
        td.innerHTML=stList[i]['Stname']
        tr.appendChild(td)
        
        var  td=document.createElement('td')
        td.innerHTML=stList[i]["Fname"]
        tr.appendChild(td)

        var  td=document.createElement('td')
        td.innerHTML=stList[i]["Cnic"]
        tr.appendChild(td)

        var  td=document.createElement('td')
        td.innerHTML=stList[i]["Gender"]
        tr.appendChild(td)

        var  td=document.createElement('td')
        td.innerHTML=stList[i]["Dob"]
        tr.appendChild(td)

         var td=document.createElement('td')
         var btnEdit=document.createElement('button')
         var btntext="Edit"
         btnEdit.innerText=btntext
         td.appendChild(btnEdit)
         tr.appendChild(td)
         
         var td=document.createElement('td')
         var btnDelete=document.createElement("button")
         var btntext="Delete"
         btnDelete.innerText=btntext
         td.appendChild(btnDelete)

         tr.appendChild(td)





        tableStudent.appendChild(tr)
    }
}