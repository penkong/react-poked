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
  state = { open : true, newPaletteName: "" };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      this.props.palette.every(({paletteName}) => (
        paletteName.toLowerCase() !== value.toLowerCase()
      ))
    })
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  render () {
    const { hideForm , handleSubmit } = this.props;
    const { open, newPaletteName } = this.state;
    return (
      <Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
        <ValidatorForm onSubmit={()=>handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please Enter New Name For Your Palette, Make Sure It Is Unique Name.
            </DialogContentText>
            <Picker/>
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
    );
  }
}

export default PaletteMetaForm;