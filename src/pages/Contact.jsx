import React, { memo } from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }} >
                <Typography variant='h4'>Contact My Resturant</Typography>
                <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
                    Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence. </p>
            </Box>
            <Box sx={{ m: 3, width: '600px', ml: 10, '@media (max-width:600px)': { width: '300px' } }} >
                <TableContainer component={Paper} >
                    <Table aria-label='contact table' >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white' }} >Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ pt: 1 }} />  123-456-7890 (toll-free)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ pt: 1 }} />  abx@gmail.com
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default memo(Contact)