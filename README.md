# Gambit Challenge - Next.js UI for TUF-2000M Data Visualization 

Welcome to the repository for the Gambit Challenge! This project aims to present a user-friendly interface for visualizing data from the TUF-2000M ultrasonic energy meter.

### Problem Description
The TUF-2000M is an ultrasonic energy meter equipped with a Modbus interface. The documentation for this interface can be found in docs/tuf-2000m.pdf. The meter provides a live text feed, detailing the time of reading followed by the first 100 register values.

###Task - Option 2
The chosen task for this project is Option 2, which involves creating a UI for displaying the data. This solution focuses on a modern, user-friendly interface, ensuring an intuitive user experience.

### Features

- **Authentication**: Managed by `[...nextauth].ts`, providing secure access to the data.
- **Data Visualization**: `DataTable.tsx` component displays the meter data in a tabular format.
- **Navigation**: `Navbar.tsx` for easy movement across different parts of the application.
- **Data Processing**: The `lib/` directory contains utilities for fetching (`fetchData.ts`), processing (`dataProcessing.ts`), and converting (`conversions.ts`) meter data.
- **Styling**: Global styles are managed with `globals.css`.

Live demo at https://gambit-atea.vercel.app/
