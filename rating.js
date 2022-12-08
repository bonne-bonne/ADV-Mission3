function rating(claimHistory) {
  const claim_history = claimHistory;
  const numOfMatches = [];
  let totalMatches = 0;

  console.log(`this is a the string received: ${claim_history}`);

  if (!claimHistory || typeof claimHistory !== "string"){
    return "Invalid input"
  }
  
  if (claimHistory &&  typeof claimHistory === "string") {
    const countCollide = (claim_history.match(/collide/g) || []).length;
    const countCrash = (claim_history.match(/crash/g) || []).length;
    const countScratch = (claim_history.match(/scratch/g) || []).length;
    const countBump = (claim_history.match(/bump/g) || []).length;

    
    numOfMatches.push(...[countCollide, countCrash, countScratch, countBump])
    console.log(numOfMatches);
  }

  numOfMatches.forEach(num => {
    totalMatches += num
  })

  if(totalMatches > 5){
    totalMatches = 5
  }

  return { "risk_rating": totalMatches }


}

module.exports = rating;
