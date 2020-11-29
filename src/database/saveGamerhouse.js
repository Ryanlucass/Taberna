function saveGamerhouse(db, gamerhouse) {
    return db.run(`
    INSERT INTO gamerhouses (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${gamerhouse.lat}",
        "${gamerhouse.lng}",
        "${gamerhouse.name}",
        "${gamerhouse.about}",
        "${gamerhouse.whatsapp}",
        "${gamerhouse.images}",
        "${gamerhouse.instructions}",
        "${gamerhouse.opening_hours}",
        "${gamerhouse.open_on_weekends}" 
    );
`);
}

module.exports = saveGamerhouse;