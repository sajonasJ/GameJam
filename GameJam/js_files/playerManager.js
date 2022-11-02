class PlayerManager{
    constructor(){
        this.sprite;
    }

    load(){//preload
    }

    setup(){// going to run at setup
        this.sprite=this.makeChar
    }

    draw(){// going to run at draw

    }

    makeChar(x,y,size){ // createsprite
        let char1=createSprite(x,y,size);
        //char1.addImage();

        return char1
    }


}