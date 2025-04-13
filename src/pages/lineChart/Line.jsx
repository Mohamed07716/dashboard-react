import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(191, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 220
      },
      {
        x: "helicopter",
        y: 188
      },
      {
        x: "boat",
        y: 223
      },
      {
        x: "train",
        y: 187
      },
      {
        x: "subway",
        y: 183
      },
      {
        x: "bus",
        y: 202
      },
      {
        x: "car",
        y: 104
      },
      {
        x: "moto",
        y: 223
      },
      {
        x: "bicycle",
        y: 47
      },
      {
        x: "horse",
        y: 232
      },
      {
        x: "skateboard",
        y: 47
      },
      {
        x: "others",
        y: 185
      }
    ]
  },
  {
    id: "france",
    color: "hsl(30, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 27
      },
      {
        x: "helicopter",
        y: 214
      },
      {
        x: "boat",
        y: 142
      },
      {
        x: "train",
        y: 103
      },
      {
        x: "subway",
        y: 112
      },
      {
        x: "bus",
        y: 166
      },
      {
        x: "car",
        y: 107
      },
      {
        x: "moto",
        y: 127
      },
      {
        x: "bicycle",
        y: 218
      },
      {
        x: "horse",
        y: 259
      },
      {
        x: "skateboard",
        y: 238
      },
      {
        x: "others",
        y: 165
      }
    ]
  },
  {
    id: "us",
    color: "hsl(24, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 40
      },
      {
        x: "helicopter",
        y: 195
      },
      {
        x: "boat",
        y: 277
      },
      {
        x: "train",
        y: 212
      },
      {
        x: "subway",
        y: 266
      },
      {
        x: "bus",
        y: 143
      },
      {
        x: "car",
        y: 235
      },
      {
        x: "moto",
        y: 19
      },
      {
        x: "bicycle",
        y: 39
      },
      {
        x: "horse",
        y: 82
      },
      {
        x: "skateboard",
        y: 279
      },
      {
        x: "others",
        y: 92
      }
    ]
  },
  {
    id: "germany",
    color: "hsl(323, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 181
      },
      {
        x: "helicopter",
        y: 292
      },
      {
        x: "boat",
        y: 243
      },
      {
        x: "train",
        y: 118
      },
      {
        x: "subway",
        y: 186
      },
      {
        x: "bus",
        y: 274
      },
      {
        x: "car",
        y: 152
      },
      {
        x: "moto",
        y: 88
      },
      {
        x: "bicycle",
        y: 84
      },
      {
        x: "horse",
        y: 131
      },
      {
        x: "skateboard",
        y: 47
      },
      {
        x: "others",
        y: 185
      }
    ]
  },
  {
    id: "norway",
    color: "hsl(163, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 40
      },
      {
        x: "helicopter",
        y: 172
      },
      {
        x: "boat",
        y: 92
      },
      {
        x: "train",
        y: 281
      },
      {
        x: "subway",
        y: 143
      },
      {
        x: "bus",
        y: 155
      },
      {
        x: "car",
        y: 269
      },
      {
        x: "moto",
        y: 186
      },
      {
        x: "bicycle",
        y: 297
      },
      {
        x: "horse",
        y: 70
      },
      {
        x: "skateboard",
        y: 53
      },
      {
        x: "others",
        y: 70
      }
    ]
  }
];


export default function  Line({isDashboard = false}) {
    const theme = useTheme();
    return (
        <Box sx={{height:isDashboard === false? "75vh":"280px"}}>    
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve= "catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard === false ?'transportation' : null,
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:isDashboard === false ? 'Count' : null,
            legendOffset: -45,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        theme={
            {
    
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "grey",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 0
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": theme.palette.text.secondary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": theme.palette.background.default,
            "color": "theme.palette.text.primary",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}
        }
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </Box>
    );
}
