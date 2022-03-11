import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AddTodos() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}
        >
            <div style={{ width: '90%', display: 'flex', justifyContent : 'space-between' }}>
                <TextField
                    hiddenLabel
                    id="email"
                    variant="filled"
                    size="small"
                    placeholder='Enter Task'
                    fullWidth
                    autoFocus
                />
                <Button
                    style={{
                        color: '#E62E2D',
                        padding : 0,
                        maxWidth : 10
                    }}
                >
                    <AddCircleOutlineIcon/>
                </Button>
            </div>
        </div>
    )
}
