import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./koltuklar.css";
import Koltuk from "./Koltuk";

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
  let temp2 = [];
  let sonuc;
  for (let i = 1; i < 101; i++) {
    temp2.push(<Koltuk numara={i}></Koltuk>);
    if (i % 4 === 0) {
      temp.push(<div className="lar">{temp2}</div>);
      temp2 = [];
      //console.log(i);
      //console.log("//////")
    }
   // console.log(document.getElementById(i))

  }

  
  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>Koltuk Seç</Button>
      <Dialog
        maxWidth="xl  "
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Koltuk Seç</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <div>
            <div className="kenar">
              <div className="pencere">Sol</div>
              <div className="koltuk_sira">{temp}</div>
              <div className="pencere">Sağ</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal Et</Button>
          <Button onClick={handleClose}>Onayla</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
