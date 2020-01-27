import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = theme => ({
    root: {
        display: "flex",
        overflow: "hidden",
        backgroundColor: theme.palette.secondary.light
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: "flex",
        position: "relative"
    },
    item: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(0, 5)
    },
    image: {
        height: 55
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    curvyLines: {
        pointerEvents: "none",
        position: "absolute",
        top: -180
    }
});

function ProductValues(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src='/static/themes/onepirate/productCurvyLines.png'
                    className={classes.curvyLines}
                    alt='curvy lines'
                />
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                src='data:image/png;base64,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'
                                alt='suitcase'
                            />
                            <Typography variant='h6' className={classes.title}>
                                Connecting Farmers with Businesses
                            </Typography>
                            <Typography variant='h5'>
                                {
                                    "One stop solution for farmers who wish to put their leftover stubble to use and earn some extra cash."
                                }
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                src='data:image/png;base64,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'
                                alt='graph'
                            />
                            <Typography variant='h6' className={classes.title}>
                                Extra Earnings for Farmers
                            </Typography>
                            <Typography variant='h5'>
                                {
                                    "Extremely useful tool for businesses to connect directly with farmers without any third party involvement ensuring maximum profits"
                                }
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V_I7o7u6EWjU3y0CkiIdtfUEyFZj8gLSe7E15dLA5B0K4XfK&s'
                                alt='clock'
                            />
                            <Typography variant='h6' className={classes.title}>
                                Easy Procurement For Businesses
                            </Typography>
                            <Typography variant='h5'>
                                {"Helps Businesses to grow"}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

ProductValues.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
