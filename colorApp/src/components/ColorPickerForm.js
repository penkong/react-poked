import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  state = {
    currentColor: "teal", 
    //  new color name
    newName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      this.props.colors.every(({name}) => (
        name.toLowerCase() !== value.toLowerCase()
      ))
    })
    ValidatorForm.addValidationRule("isColorUnique", value => {
      this.props.colors.every(({color}) => (
        color !== this.state.currentColor
      ))
    })
  }

  updateButtonColor = newColor => {
    //cl
    this.setState({currentColor: newColor.hex})
  }
  handleChange = e => this.setState({[e.target.name]: e.target.value});
  handleSubmit = () => {
    // onClick={this.addNewColor}
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName
    }
    this.props.addNewColor(newColor);
    this.setState({newName: ''});
  }
  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newName } = this.state;
    return (
      <div>
        <ChromePicker 
          className={classes.picker}
          color={currentColor} 
          onChangeComplete={this.updateButtonColor}/>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator 
            className={classes.colorNameInput}
            placeholder="Color Name"
            margin="normal"
            value={newName} 
            variant="filled"
            name="newName"
            onChange={this.handleChange}
            validators={["required", "isColorUnique","isColorNameUnique"]}  
            errorMessages={["this field id require", "Color already taken",
              "Color name must ber unique"]}
          />
          <Button 
            className={classes.addColor}
            variant="contained" 
            color="primary" 
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "palette full" : "add Color"} 
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);