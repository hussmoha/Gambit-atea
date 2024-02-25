async function getData() {
    const res = await fetch("https://tuftuf.gambitlabs.fi/feed.txt");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.text(); // Return response as text instead of JSON
  }
  
  export default async function Page() {
    try {
      const data = await getData();
      const rows = data.trim().split('\n').map(entry => {
        const [register, value] = entry.split(':');
        return (
          <tr key={register}>
            <td>{register}</td>
            <td>{value}</td>
          </tr>
        );
      });
      
      return (
        <main className="flex flex-col items-center justify-center">
          <table>
            <thead>
              <tr>
                <th>Register</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </main>
      );
    } catch (error) {
      return <main>Error: {error.message}</main>; // Handle errors gracefully
    }
  }
  