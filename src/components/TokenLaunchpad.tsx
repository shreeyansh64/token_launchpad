export function TokenLaunchpad(){
    return <div>
        <h1>Solana Token Launchpad</h1>
        <input type="text" placeholder="Name" className="tokenlaunchpad" /><br />
        <input type="text" placeholder="Symbol" className="tokenlaunchpad" /><br />
        <input type="text" placeholder="Image URL" className="tokenlaunchpad" /><br />
        <input type="text" placeholder="Initial Supply" className="tokenlaunchpad" /><br />
        <button className="tokenlaunchbutton">Create a token</button>
    </div>
}