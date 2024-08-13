import React from 'react';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface BottomDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ open, onClose, title, children }) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { height: 'auto', maxHeight: '500px', width: '500px', margin: 'auto', padding: '12px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' } }}
    >
      <div className="flex justify-between items-center p-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="mt-2 w-full border-b border-slate-400 opacity-20"></div>
      <div>{children}</div>
    </Drawer>
  );
};

export default BottomDrawer;
