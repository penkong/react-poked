import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
  state = { stage: "form", newPaletteName: "" };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      this.props.palette.every(({paletteName}) => (
        paletteName.toLowerCase() !== value.toLowerCase()
      ))
    })
  }
  savePalette = emoji => {
    //cl emoji
    const newPalette = {paletteName: this.state.newPaletteName, emoji:emoji.native};
    this.props.handleSubmit(newPalette);
    this.setState({stage: ""});
  }
  showEmojiPicker = () => {
    this.setState({stage: "emoji"});
  }
  handleChange = e => this.setState({[e.target.name]: e.target.value});

  render () {
    const { hideForm } = this.props;
    const { stage, newPaletteName } = this.state;
    return (
      <div>
        <Dialog open={stage === "emoji"}  onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} title="pick a emoji"/>
        </Dialog>
        <Dialog open={stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please Enter New Name For Your Palette, Make Sure It Is Unique Name.
              </DialogContentText>
              
              <TextValidator
                fullWidth
                margin="normal"
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Palette Name Already Taken"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" 
                color="primary" 
                type="submit"
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;