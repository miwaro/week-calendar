import React, { Component } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class WeekEvalModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      right: false,
      open: false,
      notes: '',
      weekColor: ''
    };
  }

  handleSubmit = () => {
    const newNotes = this.state.notes;
    console.log('index', this.props.index)
    this.props.updateNotes(newNotes, this.props.index)
    this.setState({ ...this.state, notes: newNotes, right: false });
  }

  handleClose = () => {
    this.setState({ ...this.state, right: false });
  }

  handleWeekColor = (e) => {
    this.setState({ ...this.state, weekColor: e.target.value })
  }

  child = (anchor) => (
    <div >
      <Dialog
        open={true}
        onClose={this.handleSubmit}
        aria-labelledby="alert-dialog-title"
      >
        <header style={{ display: 'flex', justifyContent: 'center', color: 'black' }}><h2>Week Evaluation</h2></header>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} onChange={this.handleWeekColor}>
          <label htmlFor="">Good</label>
          <input type="radio" value="green" name='week' />
          <label htmlFor="">Neutral</label>
          <input type="radio" value="black" name='week' />
          <label htmlFor="">Bad</label>
          <input type="radio" value="red" name='week' />
        </div>
        <hr />

        <DialogTitle id="alert-dialog-title"><h3 style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>{"Notes"}</h3></DialogTitle>
        <DialogContent>
          <TextField
            style={{ height: '200px', width: '400px' }}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                this.handleSubmit();
                ev.preventDefault();
              }
            }}

            inputProps={{
              maxLength: 1000,
            }}

            autoFocus
            id="name"
            multiline
            value={this.state.notes}
            minRows={15}
            label="Add a Note..."
            fullWidth
            onChange={e => this.setState({
              notes: e.target.value
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );


  toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, notes: this.props.notes, [anchor]: open });
  };

  // weekBoxStyle = this.props.index + 1 > this.props.weeksLived ? 'weekBox' : 'alreadyLivedWeekBox';

  render() {
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <div
              style={{ backgroundColor: this.state.weekColor, margin: '3px auto', cursor: 'pointer' }}
              className={this.props.index + 1 > this.props.weeksLived ? 'weekBox' : 'alreadyLivedWeekBox'}
              onClick={this.toggleDrawer(anchor, true)}>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={this.state[anchor]}
              onClose={this.toggleDrawer(anchor, false)}
              onOpen={this.toggleDrawer(anchor, true)}
            >
              {this.child(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>

    );
  }
}

export default WeekEvalModal;