import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";

const styles = theme => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.secondary.light,
        overflow: "hidden"
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    item: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(0, 5)
    },
    title: {
        marginBottom: theme.spacing(14)
    },
    number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium
    },
    image: {
        height: 55,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    curvyLines: {
        pointerEvents: "none",
        position: "absolute",
        top: -180,
        opacity: 0.7
    },
    button: {
        marginTop: theme.spacing(8)
    }
});

function ProductHowItWorks(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src='/static/themes/onepirate/productCurvyLines.png'
                    className={classes.curvyLines}
                    alt='curvy lines'
                />
                <Typography
                    variant='h4'
                    marked='center'
                    className={classes.title}
                    component='h2'
                >
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjjcPFB1bJ6N7Rxz9MxOG1cHyLnsuFdGTOFF3JTbkXDqfnQGD&s'
                                    alt='suitcase'
                                />
                                <Typography variant='h5' align='center'>
                                    Appointment every Wednesday 9am.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>2.</div>
                                <img
                                    src='https://cdn4.iconfinder.com/data/icons/smashicons-delivery-2-yellow/60/11_-Fast_Delivery-_shipping_transport_delivery-512.png'
                                    alt='graph'
                                    className={classes.image}
                                />
                                <Typography variant='h5' align='center'>
                                    First come, first served. Our offers are in
                                    limited quantities, so be quick.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>3.</div>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFAkJ9XffBuUF2-JbTb4PhhAI8jsNsPJxNe9W_wkNDKYgd8aJcw&s'
                                    alt='clock'
                                />
                                <Typography variant='h5' align='center'>
                                    {
                                        "New offers every week. New experiences, new surprises. "
                                    }
                                    {"Your Sundays will no longer be alike."}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color='secondary'
                    size='large'
                    variant='contained'
                    className={classes.button}
                    component='a'
                    href='/premium-themes/onepirate/sign-up/'
                >
                    Get started
                </Button>
            </Container>
        </section>
    );
}

ProductHowItWorks.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
