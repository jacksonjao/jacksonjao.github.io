class Logica {
    constructor() {
        this.data=  ['0','1','1/2','2','3','5','8','13','20','40','100','?','∞']
        let parent = document.getElementById('container-cards');
        let bigCardViewData = document.getElementById('big-card-data');
        let bigCardView = document.getElementById('big-card');
        this.animationStart = true;
        this.backupDataValue = 'Planning <br> Poker';
for (let i = 0; i < this.data.length; i++){
    this.createCard(parent, new Card(this.data[i]),bigCardView,bigCardViewData);
}

        bigCardView.addEventListener("click", ()=>{
          this.changeData(bigCardView,bigCardViewData,'Planning <br> Poker',true)

        });



    }
    createCard(parent, data, bigCardView, bigCardViewData){
        let header = document.createElement('h2');                // Create a <h1> element
        let text = document.createTextNode(data.getText());     // Create a text node
        header.appendChild(text);
        let nodeCard = document.createElement('div');
        let self = this;
        nodeCard.classList.add("card","align-center");
        nodeCard.appendChild(header);
        nodeCard.addEventListener("click", ()=>{
            self.changeData(bigCardView,bigCardViewData,data.getText())
        });
        parent.appendChild(nodeCard)
    }
changeData(bigCardView, bigCardViewData,data, reset){

        if(this.backupDataValue!==data){
            if(this.animationStart){
                this.animationStart=false;
                bigCardView.removeChild(document.getElementById("big-card-init"))
                let animation = document.createElement('div');
                animation.setAttribute("id", "big-card-init")
                bigCardView.appendChild(animation);



                setTimeout(()=>{
                    bigCardViewData.innerHTML=data
                    this.backupDataValue=data;
                    bigCardViewData.classList.remove("label-start");
                    if(reset){
                        bigCardViewData.classList.add("label-start");
                    }
                },500)

                animation.addEventListener("animationend", ()=>{
                    this.animationStart=true;
                });
            }

        }




}


}

new Logica()
