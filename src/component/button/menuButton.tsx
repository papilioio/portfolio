import React from 'react';
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import withStylesProps from '../util/withStylesProps'

import theme from 'theme';

const styles = props => ({
    menuButton: {
        fontSize: props.size | 14,
        color: "#FFF",
        textDecoration: 'none',
        transition: theme.transitions.create(
            ['opacity'],
            { duration: theme.transitions.duration.complex }
        ),
        '&:hover': {
            textDecoration: 'none',
            opacity: 0.5,
        }
    },
});

const MenuButton = (props) => {
    const { classes, children, href } = props
    // const [over, setOver] = React.useState(false)

    // const handleChange = () => {
    //     setOver((prev) => !prev);
    // };
    // const preventDefault = (event) => event.preventDefault()
    return (
        <Typography>
            <Link
                href={href}
                className={classes.menuButton}
                // onClick={preventDefault}
                // onMouseOver={handleChange}
            >

                {children}
            </Link>
        </Typography>
    );
}

export default withStylesProps(styles)(MenuButton);