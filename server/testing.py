import plotly.graph_objects as go
import pandas as pd

# Data preparation
data = {
    'Amount': [100000, 4000000, 6500000, 20000000, 25000000, 100000000],
    'Travel': [139.47407274999998, 4943.868963032251, 8580.2965, 22014.759003012696, 30471.882, 200602.86259436805],
    'Living': [125.52666547499999, 4449.482066729026, 7722.267, 19813.283102711426, 27424.694, 180542.57633493128]
}
df = pd.DataFrame(data)

# Create the initial figure
fig = go.Figure()

# Adding traces for Travel and Living
fig.add_trace(go.Scatter(x=df['Amount'], y=df['Travel'], mode='lines+markers', name='Travel', line=dict(color='cyan')))
fig.add_trace(go.Scatter(x=df['Amount'], y=df['Living'], mode='lines+markers', name='Living', line=dict(color='orange')))

# Update layout for interactivity and better display
fig.update_layout(
    title='Travel and Living Rates',
    xaxis_title='Amount',
    yaxis_title='Rate',
    legend_title='Category',
    template='plotly_dark',
    updatemenus=[{
        'buttons': [
            {'method': 'update', 'label': 'Travel', 'args': [{'visible': [True, False]}, {'title': 'Travel'}]},
            {'method': 'update', 'label': 'Living', 'args': [{'visible': [False, True]}, {'title': 'Living'}]},
            {'method': 'update', 'label': 'Both', 'args': [{'visible': [True, True]}, {'title': 'Travel and Living'}]},
        ],
        'direction': 'down',
        'showactive': True,
    }]
)

# Adding an animation by creating frames
fig.frames = [go.Frame(data=[go.Scatter(x=df['Amount'], y=df['Travel'], mode='lines+markers', name='Travel')],
                       name='Travel'),
              go.Frame(data=[go.Scatter(x=df['Amount'], y=df['Living'], mode='lines+markers', name='Living')],
                       name='Living')]

# Play button to animate
fig.update_layout(
    updatemenus=[{
        'buttons': [
            {'args': [None, {'frame': {'duration': 1000, 'redraw': True}, 'fromcurrent': True}], 'label': 'Play', 'method': 'animate'},
            {'args': [[None], {'frame': {'duration': 0, 'redraw': True}, 'mode': 'immediate', 'transition': {'duration': 0}}],
             'label': 'Pause', 'method': 'animate'},
        ],
        'direction': 'left',
        'pad': {'r': 10, 't': 87},
        'showactive': False,
        'type': 'buttons',
        'x': 0.1,
        'xanchor': 'right',
        'y': 0,
        'yanchor': 'top'
    }]
)

# Display the plot
fig.show()
