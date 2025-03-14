let hash=document.querySelector(".hash-tag");
let p=document.querySelector(".para");
let events=document.querySelector(".atEvent");
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function run(){
    hash.innerHTML=`#001`;
    p.innerHTML='Gear up for an electrifying event at IIIT\'s fest! Teams of 4 will battle in two rounds: a quiz to secure a franchise spot, followed by a high-stakes player auction. With 100 crores, build your dream team of 12 players (4 batsmen, 4 bowlers, 2 all-rounders, 1 wicket-keeper, and 1 impact player) while balancing Indian and overseas stars. Master the bidding war, strategize your picks, and aim for the highest team rating to win. Will you outsmart the competition? Join the thrill and showcase your cricketing genius!';
    events.innerHTML='@IPL Auction 2.O';
    await delay(5000);
    
    hash.innerHTML=`#002`;
    p.innerHTML="Unleash your creativity in this week-long Instagram marketing showdown! Teams of 4-5 will craft and run a dynamic campaign for a given product, posting daily content, reels, and stories to maximize engagement. After 6 days of strategizing and engaging, teams will pitch their campaign results to a panel of judges. Showcase your skills in analytics, content creation, and storytelling to win exciting rewards! Ready to duel? Join the challenge and prove your marketing prowess!";
    events.innerHTML='@Digital-Duel Challenge';
    await delay(5000);
}
async function run_anim() {
    let i=0;
    while(i<100000){
        run();
        await delay(10000);
        i++;
    }
}
run_anim();
