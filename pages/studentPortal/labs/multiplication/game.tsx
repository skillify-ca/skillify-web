import React from "react";
import MultiplicationBlock from "../../../../components/math/MultiplicationBlock";
import { Button } from "../../../../components/ui/Button";

class BlockComponentGallery extends React.Component {
    handlePlayer: string;
    handleSelected: string;
    constructor(props) {
      super(props);



      this.state = {setPlayer: false};
      this.handlePlayer = this.handlePlayer.bind(this);
      this.state = {setSelected: false};
      this.handleSelected = this.handleSelected.bind(this);
    }


  
}
  render () {
  const setPlayer = this.state.player;
  this.handlePlayer = this.handlePlayer.bind(this);
  if (setPlayer) === false {
    <MultiplicationBlock 
      selected={false}
      onClick={false} text={""} player={false} />
  } else {
    <MultiplicationBlock
      selected={true}
      onClick={true} text={""} player={false} />
  };
      
  
    return (
    <div>
      <Button label={"Next Player"} 
      onClick={this.handlePlayer}/>
      <h1 className="flex justify-center">Multiplication Game</h1>
      <MultiplicationBlock
        text={"72"}
        selected={this.handleSelected}
        onClick={this.handlePlayer}
        player={false}
      />
      <MultiplicationBlock
        text={"8 x 9"}
        selected={false}
        onClick={false}
        player={false}
      />
      <MultiplicationBlock
        text={"8"}
        selected={false}
        onClick={false}
        player={false}
      />
      <MultiplicationBlock
        text={"2 x 4"}
        selected={false}
        onClick={false}
        player={false}
      />
      <MultiplicationBlock
        text={"12"}
        selected={false}
        onClick={false}
        player={false}
      />{" "}
    </div>
  );
}

export default BlockComponentGallery;
