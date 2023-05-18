import { UIContext } from '@/context/ui';
import { InboxOutlined, MailOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';

const menuItems = [
  'Inbox',
  'Starred',
  'Send Mail',
  'Remove Mail',
]



export const Sidebar = () => {

  const { sideOpen } = useContext(UIContext)

  const { closeSide } = useContext( UIContext )

  return (
    <Drawer
      anchor="left"
      open={ sideOpen }
      onClose={ closeSide }
    >
      <Box sx={{ padding: '5px 10px'}}>
        <Typography variant="h6">Menu</Typography>

        <List>
          {
            menuItems.map(( text, index ) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 === 0 ? <InboxOutlined /> : <MailOutlined /> }
                </ListItemIcon>
                <ListItemText primary={ text } />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map(( text, index ) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 === 0 ? <InboxOutlined /> : <MailOutlined /> }
                </ListItemIcon>
                <ListItemText primary={ text } />
              </ListItem>
            ))
          }
        </List>
      
      </Box>

      
    </Drawer>
  )
}
