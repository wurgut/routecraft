import re
import json

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Default empty arrays for destination schema
default_zones = "zones: [], "
default_bases = "bases: [], "

# Find the DESTINATIONS array block
start_idx = js.find('var DESTINATIONS = [')
end_idx = js.find('/* ═══════════════════════════════════════════', start_idx)

if start_idx != -1 and end_idx != -1:
    dest_block = js[start_idx:end_idx]
    
    # We will regex replace the empty default zones/bases or add them
    # For Mallorca
    dest_block = dest_block.replace(
        "zones: [\n          { id: 'mallorca-tramuntana', name: 'Serra de Tramuntana', character: 'UNESCO World Heritage mountain range. Sa Calobra, Puig Major, Cap de Formentor.', difficulty: 'advanced', bestFor: ['climbers', 'pro-training'], routeIds: ['mallorca-sa-calobra'] },\n          { id: 'mallorca-plains', name: 'Central Plain & East Coast', character: 'Flat to rolling terrain. Perfect for base miles, group rides, and beginners.', difficulty: 'easy', bestFor: ['beginners', 'group rides'], routeIds: [] }\n        ]",
        "zones: [\n          { id: 'mallorca-tramuntana', name: 'Serra de Tramuntana', character: 'UNESCO World Heritage mountain range. Sa Calobra, Puig Major, Cap de Formentor.', difficulty: 'advanced', bestFor: ['climbers', 'pro-training'], routeIds: ['mallorca-sa-calobra'] },\n          { id: 'mallorca-plains', name: 'Central Plain & East Coast', character: 'Flat to rolling terrain. Perfect for base miles, group rides, and beginners.', difficulty: 'easy', bestFor: ['beginners', 'group rides'], routeIds: [] }\n        ]"
    )
    
    # Add dummy zones and bases to missing regions:
    # Girona
    dest_block = dest_block.replace(
        "conditions: null, zones: [], bases: [], deepDive: null\n      },",
        "conditions: { roads: 'Top tier asphalt', water: 'Frequent', bikeShops: 'Best in Europe', rental: 'Abundant', specialRisks: 'None' },\n        zones: [\n          { id: 'girona-rocacorba', name: 'Rocacorba', character: 'The legendary test climb for pros.', difficulty: 'expert', bestFor: ['pros', 'climbers'], routeIds: [] },\n          { id: 'girona-coast', name: 'Costa Brava', character: 'Stunning coastal rolling roads.', difficulty: 'intermediate', bestFor: ['all-rounders'], routeIds: [] }\n        ],\n        bases: [\n          { id: 'girona-city', name: 'Girona Old Town', character: 'Medieval city with unmatched cycling cafe culture.', bestFor: 'Pro atmosphere, amazing food, central access.', accessibleZoneIds: ['girona-rocacorba', 'girona-coast'], partnerIds: [], nearestAirportIATA: 'GRO', transferKm: 15 }\n        ],\n        deepDive: null\n      },"
    )

    # Cape Town
    dest_block = dest_block.replace(
        "conditions: null, zones: [], bases: [], deepDive: null\n      },",
        "conditions: { roads: 'Good asphalt, strong crosswinds', water: 'Frequent', bikeShops: 'Abundant', rental: 'Available', specialRisks: 'Baboons, extreme wind' },\n        zones: [\n          { id: 'cape-chapmans', name: 'Chapman\\'s Peak', character: 'World-class coastal drive.', difficulty: 'intermediate', bestFor: ['scenery', 'roadies'], routeIds: [] },\n          { id: 'cape-winelands', name: 'Winelands', character: 'Rolling vineyards and historic towns.', difficulty: 'easy', bestFor: ['wine lovers', 'recovery'], routeIds: [] }\n        ],\n        bases: [\n          { id: 'cape-town-city', name: 'Cape Town City Bowl', character: 'Vibrant city beneath Table Mountain.', bestFor: 'Access to everything.', accessibleZoneIds: ['cape-chapmans', 'cape-winelands'], partnerIds: [], nearestAirportIATA: 'CPT', transferKm: 20 }\n        ],\n        deepDive: null\n      },"
    )

    # Colombia
    dest_block = dest_block.replace(
        "conditions: null, zones: [], bases: [], deepDive: null\n      }",
        "conditions: { roads: 'Mixed, some rough asphalt', water: 'Available in towns', bikeShops: 'Medellin only', rental: 'Limited', specialRisks: 'Extreme altitude, rain' },\n        zones: [\n          { id: 'colombia-letras', name: 'Alto de Letras', character: 'One of the longest climbs in the world.', difficulty: 'expert', bestFor: ['climbers', 'altitude training'], routeIds: [] },\n          { id: 'colombia-medellin', name: 'Medellin Hills', character: 'Steep lush climbs out of the city.', difficulty: 'advanced', bestFor: ['base training'], routeIds: [] }\n        ],\n        bases: [\n          { id: 'medellin-poblado', name: 'El Poblado, Medellin', character: 'Upscale district, gateway to Andes.', bestFor: 'Digital nomads, pros.', accessibleZoneIds: ['colombia-medellin', 'colombia-letras'], partnerIds: [], nearestAirportIATA: 'MDE', transferKm: 30 }\n        ],\n        deepDive: null\n      }"
    )

    new_js = js[:start_idx] + dest_block + js[end_idx:]
    
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
    
    print("Schema injected successfully.")
else:
    print("DESTINATIONS block not found")
