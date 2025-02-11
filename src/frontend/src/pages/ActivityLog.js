import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, } from 'antd';

const { Title } = Typography;

const logs = [
  { time: new Date('Feb 3, 2025 7:59am'), action: 'File uploaded' },
  { time: new Date('Feb 3, 2025 7:53am'), action: 'Files submitted to a project' },
  { time: new Date('Feb 2, 2025 6:30pm'), action: 'Project metadata updated' },
  { time: new Date('Feb 2, 2025 4:12pm'), action: 'File downloaded' },
  { time: new Date('Feb 2, 2025 12:02pm'), action: 'Files shared' },
  { time: new Date('Feb 1, 2025 1:03pm'), action: 'File uploaded' },
  { time: new Date('Jan 31, 2025 11:45am'), action: 'Files submitted to a project' },
  { time: new Date('Jan 30, 2025 3:50pm'), action: 'Project metadata updated' },
  { time: new Date('Jan 30, 2025 10:27am'), action: 'File downloaded' },
  { time: new Date('Jan 29, 2025 7:22am'), action: 'Files shared' },
  { time: new Date('Jan 27, 2025 2:14pm'), action: 'Files shared' },
  { time: new Date('Jan 26, 2025 8:15am'), action: 'File uploaded' },
];

// change dates to string
function logTime(date) {
    const months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
    let month = months[date.getMonth()];
    let hour = date.getHours();
    let m = "am";
    if (hour > 12) {
        hour -= 12;
        m = "pm";
    } 
    return month + date.getDate() + ", " + date.getFullYear() + " " + hour + ":" + date.getMinutes() + m + " PST";
}

export default function ActivityLog() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* Title */}
      <Box
        sx={{
          textAlign: 'center',
          padding: 4,
        }}
      >
        <Title level={1}>Activity Log</Title>
      </Box>
        
        {/* Right container with activity log */}
<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'left',
    height: '60vh',
    width: '60%',
    margin: '20px auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'auto',
  }}
>

    <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <tr>
            <th style={{height: '50px', textAlign: 'left', borderBottom:'1px solid black'}} >Timestamp</th>
            <th style={{height: '50px', textAlign: 'left', borderBottom:'1px solid black'}} >Activities</th>
        </tr>
            {logs.map((log) => (
                <tr>
                    <td style={{width: '40%', textAlign: 'left', borderBottom:'1px solid black'}} >{logTime(log.time)}</td>
                    <td style={{width: '60%', textAlign: 'left', borderBottom:'1px solid black'}} >{log.action}</td>
                </tr>
            ))}
    </table>

</Box>

    </Box>
  );
}