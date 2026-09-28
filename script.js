function gradeQuiz(){
  const key={q1:'b',q2:'c',q3:'b',q4:'b',q5:'c',q8:'false',q9:'tornado'};
  let score=0,total=Object.keys(key).length;
  for(const [name,ans] of Object.entries(key)){
    const el=document.querySelector(`[name="${name}"]:checked`);
    if(el && el.value===ans) score++;
  }
  const r=document.getElementById('quizResult');
  if(r){r.style.display='block';r.textContent=`You scored ${score} out of ${total}. Review any question you were unsure about, then try again.`;r.scrollIntoView({behavior:'smooth',block:'center'});}
}
