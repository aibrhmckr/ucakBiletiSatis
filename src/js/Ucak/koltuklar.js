import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./koltuklar.css";
import Koltuk from "./Koltuk";
import UcluKoltuk from "./UcluKoltuk";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
///////////
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const temp = [];
  let temp2 =[];
  for(let i=1;i<301;i++){
  
    temp2.push(<Koltuk numara={i}></Koltuk>)
    if (i%4===0){
        temp.push(<div className="lar">{temp2}</div>)
        temp2=[];
        console.log(i);
        
    }
  }
  
  /////////////////

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>Koltuk Seç</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Koltuk Seç</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
            <UcluKoltuk koltukt={temp}></UcluKoltuk>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal Et</Button>
          <Button onClick={handleClose}>Onayla</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
