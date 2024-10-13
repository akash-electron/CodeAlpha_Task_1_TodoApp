import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const TaskList = ({ folders, setFolders }) => {
    const allFiles = JSON.parse(localStorage.getItem('folders'))

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleRandom = () => {
        alert('')
    }

    const handleDelete = (e, index) => {
        e.stopPropagation();
        // Remove the folder at the given index
        const updatedFolders = folders.filter((_, i) => i !== index);
        // Update the state and local storage
        setFolders(updatedFolders);
        localStorage.setItem('folders', JSON.stringify(updatedFolders));
    };

    return (
        <div className="mt-5">
            <h2 className="text-3xl text-start ">TaskList</h2>
            <div className="text-start">
                <div>
                    <div className="mt-2">
                        {allFiles.length !== 0 ? (
                            allFiles.map((file, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        style={{ position: 'relative' }}
                                    >
                                        <div className="m-1 top-0 left-2 right-10 bottom-0 absolute flex justify-between items-center">
                                            <h1> {index + 1}. {file.title}</h1>
                                            <button onClick={(e) => handleDelete(e, index)} ><DeleteIcon color="warning" /></button>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{file.description}</Typography>
                                        <Button onClick={handleRandom} color="secondary" variant="contained">
                                            Pending
                                        </Button>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        ) : (
                            <Typography >No files available. Add Some Tasks</Typography>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskList