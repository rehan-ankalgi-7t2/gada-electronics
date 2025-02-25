import React, { useState } from "react";
import {
    Drawer,
    Button,
    List,
    ListItem,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Slider,
    Typography,
    Divider,
    Select,
    MenuItem,
    ListItemText,
} from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const categories = ["Electronics", "Clothing", "Home Appliances"];
const ratings = [5, 4, 3, 2, 1];

const ProductFilter = ({ onFilter }) => {
    const [open, setOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedRatings, setSelectedRatings] = useState([]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handleRatingChange = (rating) => {
        setSelectedRatings((prev) =>
            prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
        );
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const applyFilters = () => {
        onFilter({
            categories: selectedCategories,
            priceRange,
            ratings: selectedRatings,
        });
        toggleDrawer();
    };

    return (
        <>
            <Button variant="outlined" color="appleBlack" onClick={toggleDrawer} endIcon={<FilterAltOutlinedIcon />} sx={{ marginBlock: 2 }}>
                Open Filters
            </Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List sx={{ width: 300, padding: 3, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Filter Products <FilterAltOutlinedIcon/></Typography>

                    <FormControl fullWidth>
                        <FormLabel component="legend">Category</FormLabel>
                        <Select
                            multiple
                            value={selectedCategories}
                            onChange={(event) => setSelectedCategories(event.target.value)}
                            renderValue={(selected) => selected.join(', ')}
                            color="appleBlack"
                        >
                            {categories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    <Checkbox checked={selectedCategories.includes(category)} color="appleBlack"/>
                                    <ListItemText primary={category} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Divider/>

                    <FormControl component="fieldset" sx={{ mt: 2 }}>
                        <FormLabel component="legend">Price Range</FormLabel>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={5000}
                            color="appleBlack"
                        />
                    </FormControl>
                    <span>min: {priceRange[0]} - max: {priceRange[1]}</span>
                    <Divider/>

                    {/* Rating Filter */}
                    <FormControl component="fieldset" sx={{ mt: 2 }}>
                        <FormLabel component="legend">Rating</FormLabel>
                        <FormGroup>
                            {ratings.map((rating) => (
                                <FormControlLabel
                                    key={rating}
                                    control={
                                        <Checkbox
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => handleRatingChange(rating)}
                                            color="appleBlack"
                                        />
                                    }
                                    label={`${rating} Stars`}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

                    <Button variant="contained" color="appleBlack" sx={{ mt: 3, color: "#fff" }} onClick={applyFilters}>
                        Apply Filters
                    </Button>
                </List>
            </Drawer>
        </>
    );
};

export default ProductFilter;
