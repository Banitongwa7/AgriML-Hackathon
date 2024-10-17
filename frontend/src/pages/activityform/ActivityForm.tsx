import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  TextField
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import NavBar from '../../components/navbar/NavBar';


const ActivityForm: React.FC = () => {
  const [activities, setActivities] = useState<string[]>(['Arrosage - 10L', 'Plantation - 5 plants']);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newActivity, setNewActivity] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddActivity = () => {
    if (newActivity) {
      setActivities([...activities, newActivity]);
      setNewActivity('');
      setOpen(false);
    }
  };

  const handleDeleteActivity = (index: number) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleEditActivity = () => {
    if (editingIndex !== null && newActivity) {
      const updatedActivities = [...activities];
      updatedActivities[editingIndex] = newActivity;
      setActivities(updatedActivities);
      setEditOpen(false);
      setNewActivity('');
      setEditingIndex(null);
    }
  };

  return (
    <Container className="mt-8">
      <div>
        <NavBar/>
      </div>
      <Typography variant="h4" className="text-center mb-4">Activités</Typography>
      <List className="space-y-2">
        {activities.map((activity, index) => (
          <ListItem
            key={index}
            className="flex justify-between items-center bg-white shadow-md rounded-md p-4"
          >
            <ListItemText primary={activity} />
            <div className="space-x-2">
              <IconButton
                edge="end"
                onClick={() => {
                  setEditOpen(true);
                  setEditingIndex(index);
                  setNewActivity(activity);
                }}
                className="text-blue-500"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => handleDeleteActivity(index)}
                className="text-red-500"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white"
      >
        Ajouter une nouvelle activité
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Container className="p-6">
          <TextField
            label="Nouvelle Activité"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            fullWidth
            className="mb-4"
          />
          <Button
            onClick={handleAddActivity}
            color="primary"
            variant="contained"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Ajouter
          </Button>
        </Container>
      </Dialog>

      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <Container className="p-6">
          <TextField
            label="Modifier l'activité"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            fullWidth
            className="mb-4"
          />
          <Button
            onClick={handleEditActivity}
            color="primary"
            variant="contained"
            className="bg-green-500 hover:bg-blue-600 text-white"
          >
            Modifier
          </Button>
        </Container>
      </Dialog>
    </Container>
  );
};

export default ActivityForm;
