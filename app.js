var dtStudnet =firebase.database().ref('student')

var gender="male"
function funcmale(){
    gender="male"
}
function funcfemale(){
    gender="female"
}

function Objectstudent(key,stname,fname,cnic,dob,gender,cellno,whatsappno,address){
    this.Key=key
    this.Stname=stname
    this.Fname=fname
    this.Cnic=cnic
    this.Dob=dob
    this.Cellno=cellno
    this.Whatsappno=whatsappno
    this.address=address
    this.Gender=gender

}
function funcsubmit(){
    var stname=document.getElementById("txtstname").value
    var fname=document.getElementById("txtfname").value 
    var cnic=document.getElementById("txtcnic").value
    var dob=document.getElementById("txtdob").value
    var cellno=document.getElementById("txtcellno").value
    var whatsappno=document.getElementById("txtwhatsappno").value
    var address=document.getElementById("txtaddress").value
    var key = dtStudnet.push().key

    var objst= new Objectstudent(key,stname,fname,cnic,dob,gender,cellno,whatsappno,address)
    dtStudnet.child(key).set(objst)
    console.log (objst)
}

    