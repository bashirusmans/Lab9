var attendancebtns = document.getElementsByClassName("attendancebtn");
if(attendancebtns){
    for(i=0; i<attendancebtns.length; i++){
        attendancebtns[i].addEventListener('click',function(){
            if(this.innerHTML=="Present"){
                this.classList.remove('btn-success');
                this.classList.add('btn-danger');
                this.innerHTML="Absent"
            }
            else{
                this.classList.remove('btn-danger');
                this.classList.add('btn-success');
                this.innerHTML="Present"
            }
        })
    }
}
