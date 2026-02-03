function showSection(id){
  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Dummy stats animation
document.addEventListener("DOMContentLoaded",()=>{
  const stats = { total:120, approved:80, pending:30, rejected:10 };

  animateValue("total",0,stats.total,800);
  animateValue("approved",0,stats.approved,800);
  animateValue("pending",0,stats.pending,800);
  animateValue("rejected",0,stats.rejected,800);

  new Chart(document.getElementById("barChart"),{
    type:"bar",
    data:{
      labels:["Approved","Pending","Rejected"],
      datasets:[{ data:[80,30,10] }]
    }
  });

  new Chart(document.getElementById("pieChart"),{
    type:"pie",
    data:{
      labels:["Approved","Pending","Rejected"],
      datasets:[{ data:[80,30,10] }]
    }
  });
});

function animateValue(id,start,end,duration){
  let obj=document.getElementById(id);
  let range=end-start;
  let current=start;
  let increment=end>start?1:-1;
  let stepTime=Math.abs(Math.floor(duration/range));
  let timer=setInterval(()=>{
    current+=increment;
    obj.innerHTML=current;
    if(current==end){ clearInterval(timer); }
  },stepTime);
}
