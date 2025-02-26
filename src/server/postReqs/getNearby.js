async function getNearby(req, res) {
    try {
        const bodyText = await req.text();
        const body = JSON.parse(bodyText);
        const { latitude, longitude, doctorType } = body;
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const radius = 50000; // 5km
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=doctor&keyword=${doctorType}&key=${apiKey}`;
        const response = await fetch(url);
        const json = await response.json();        
        return NextResponse.json(json); 
    }
    catch (error) {
        console.error("Error getting doctors: ", error);
        return NextResponse.json({ error: "Error getting doctors" }, { status: 500 });
    }
}