import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';


const data = [
    {
    country: "AD",
    "hot dog": 67,
    "hot dogColor": "hsl(93, 70%, 50%)",
    burger: 41,
    burgerColor: "hsl(74, 70%, 50%)",
    sandwich: 128,
    sandwichColor: "hsl(105, 70%, 50%)",
    kebab: 32,
    kebabColor: "hsl(325, 70%, 50%)",
    fries: 60,
    friesColor: "hsl(39, 70%, 50%)",
    donut: 141,
    donutColor: "hsl(304, 70%, 50%)"
  },
  {
    country: "AE",
    "hot dog": 114,
    "hot dogColor": "hsl(139, 70%, 50%)",
    burger: 75,
    burgerColor: "hsl(319, 70%, 50%)",
    sandwich: 18,
    sandwichColor: "hsl(239, 70%, 50%)",
    kebab: 3,
    kebabColor: "hsl(67, 70%, 50%)",
    fries: 110,
    friesColor: "hsl(317, 70%, 50%)",
    donut: 134,
    donutColor: "hsl(288, 70%, 50%)"
  },
  {
    country: "AF",
    "hot dog": 54,
    "hot dogColor": "hsl(336, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(249, 70%, 50%)",
    sandwich: 122,
    sandwichColor: "hsl(259, 70%, 50%)",
    kebab: 30,
    kebabColor: "hsl(72, 70%, 50%)",
    fries: 65,
    friesColor: "hsl(331, 70%, 50%)",
    donut: 32,
    donutColor: "hsl(151, 70%, 50%)"
  },
  {
    country: "AG",
    "hot dog": 183,
    "hot dogColor": "hsl(156, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(141, 70%, 50%)",
    sandwich: 34,
    sandwichColor: "hsl(23, 70%, 50%)",
    kebab: 107,
    kebabColor: "hsl(106, 70%, 50%)",
    fries: 47,
    friesColor: "hsl(280, 70%, 50%)",
    donut: 3,
    donutColor: "hsl(181, 70%, 50%)"
  },
  {
    country: "AI",
    "hot dog": 151,
    "hot dogColor": "hsl(39, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(84, 70%, 50%)",
    sandwich: 170,
    sandwichColor: "hsl(325, 70%, 50%)",
    kebab: 74,
    kebabColor: "hsl(161, 70%, 50%)",
    fries: 113,
    friesColor: "hsl(95, 70%, 50%)",
    donut: 14,
    donutColor: "hsl(239, 70%, 50%)"
  },
  {
    country: "AL",
    "hot dog": 168,
    "hot dogColor": "hsl(18, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(174, 70%, 50%)",
    sandwich: 157,
    sandwichColor: "hsl(153, 70%, 50%)",
    kebab: 6,
    kebabColor: "hsl(210, 70%, 50%)",
    fries: 173,
    friesColor: "hsl(313, 70%, 50%)",
    donut: 173,
    donutColor: "hsl(87, 70%, 50%)"
  },
  {
    country: "AM",
    "hot dog": 161,
    "hot dogColor": "hsl(232, 70%, 50%)",
    burger: 170,
    burgerColor: "hsl(56, 70%, 50%)",
    sandwich: 173,
    sandwichColor: "hsl(270, 70%, 50%)",
    kebab: 87,
    kebabColor: "hsl(190, 70%, 50%)",
    fries: 115,
    friesColor: "hsl(8, 70%, 50%)",
    donut: 120,
    donutColor: "hsl(65, 70%, 50%)"
  }
];



export default function Bar({isDashboard = false}) {
    const theme = useTheme()
return (
    <Box sx={{height:isDashboard ===false? "75vh" : "320px"}}>
        <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        theme={{
            // @ts-ignore
            textColor: theme.palette.text.primary,
            fontSize: 11,
            axis: {
            domain: {
                line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
                },
            },
            legend: {
                text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                },
            },
            ticks: {
                line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
                },
                text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                },
            },
            },
            grid: {
            line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
            },
            },
            legends: {
            title: {
                text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                },
            },
            text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
            },
            ticks: {
                line: {},
                text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                },
            },
            },
            annotations: {
            text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
            },
            link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
            },
            outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
            },
            symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
            },
            },
            tooltip: {
            container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
            },
        }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard === false?'country' : '',
            legendPosition: 'middle',
            legendOffset: 35,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard === false?'minimum wage/month' : "",
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
        </Box>
)
}
