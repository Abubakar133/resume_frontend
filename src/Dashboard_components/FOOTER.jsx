import React from 'react';
import { Grid, Typography, List, ListItem } from '@mui/material';

const Footer = () => {
  return (
    <div
      className="elementor elementor-149 elementor-location-footer"
      style={{
        padding: '20px',
        backgroundColor: '#f8f8f8',
        marginTop: '20px',
      }}
      data-elementor-type="footer"
      data-elementor-id="149"
      data-elementor-post-type="elementor_library"
    >
      <Grid container spacing={2} justifyContent="space-around">
        {/* Column 1 */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h3"
            style={{
              fontWeight: 'bolder',
              color: '#4A492A', // Highlight color for main title
              fontFamily: 'Cooper-bt', // Set font family for main title
            }}
            gutterBottom
          >
            Easy CV
          </Typography>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            style={{
              fontWeight: 'bold',
              color: '#333', // Change heading color if needed
              fontFamily: 'Cooper-bt', // Set font family for headings
            }}
            gutterBottom
          >
            Stefnur & Skilmálar
          </Typography>
          <List>
            <ListItem style={{ padding: '5px 0' }}>Endurgreiðslustefna</ListItem>
            <ListItem style={{ padding: '5px 0' }}>Persónuverndarstefna</ListItem>
            <ListItem style={{ padding: '5px 0' }}>Skilmálar</ListItem>
          </List>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            style={{
              fontWeight: 'bold',
              color: '#333', // Change heading color if needed
              fontFamily: 'Cooper-bt', // Set font family for headings
            }}
            gutterBottom
          >
            Opnunartími
          </Typography>
          <List>
            <ListItem style={{ padding: '5px 0' }}>Mánudaga - föstudaga</ListItem>
            <ListItem style={{ padding: '5px 0' }}>09:00 - 16:00</ListItem>
          </List>
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            style={{
              fontWeight: 'bold',
              color: '#333', // Change heading color if needed
              fontFamily: 'Cooper-bt', // Set font family for headings
            }}
            gutterBottom
          >
            Staðsetning
          </Typography>
          <List>
            <ListItem style={{ padding: '5px 0' }}>Laufrimi 12A</ListItem>
            <ListItem style={{ padding: '5px 0' }}>112, RVK</ListItem>
          </List>
        </Grid>

        {/* Column 5 */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            style={{
              fontWeight: 'bold',
              color: '#333', // Change heading color if needed
              fontFamily: 'Cooper-bt', // Set font family for headings
            }}
            gutterBottom
          >
            Hafðu samband
          </Typography>
          <List>
            <ListItem style={{ padding: '5px 0' }}>easycv@easycv.is</ListItem>
            <ListItem style={{ padding: '5px 0' }}>(354) 690-8688</ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
