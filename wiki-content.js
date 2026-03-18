/* ================================================================
   EarthWars Season 2  –  Complete Wiki Content
   Keys match sidebar data-section IDs.
   Self-executing: injects <div class="wiki-section"> into #wikiContent
   ================================================================ */

const WIKI = {

/* ────────────── HOME ────────────── */
home: `
<div class="home-hero">
  <h2>EarthWars Season 2</h2>
  <p class="subtitle">The ultimate geopolitical warfare Minecraft experience</p>
</div>

<div class="stats-row">
  <div class="stat"><span class="num">80+</span><span class="label">Commands</span></div>
  <div class="stat"><span class="num">13</span><span class="label">Custom Enchants</span></div>
  <div class="stat"><span class="num">6</span><span class="label">Skill Trees</span></div>
  <div class="stat"><span class="num">21</span><span class="label">God Items</span></div>
</div>

<div class="home-intro">
  <h3>What is EarthWars?</h3>
  <p>EarthWars is a country-based warfare plugin where players form nations, claim territory, build walls, engage in diplomacy, declare wars, siege enemy capitals, and compete for server dominance. Season 2 brings skills, valuable blocks, custom enchants, dungeons, CTF, bounties, and a full economy.</p>
</div>

<div class="feature-grid">
  <div class="feature-card">
    <span class="fc-icon">🏰</span>
    <h4>Countries</h4>
    <p>Create &amp; manage your nation. Claim land, build walls, recruit citizens.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">⚔️</span>
    <h4>Warfare</h4>
    <p>Declare war, siege territory, destroy walls, conquer enemies.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">⭐</span>
    <h4>Skills</h4>
    <p>6 skill trees, 30 perks, 50 levels each. 7x XP scaling.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">🏚️</span>
    <h4>Dungeons</h4>
    <p>PvE dungeon with parkour, torch rooms, and massive bosses.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">💰</span>
    <h4>Economy</h4>
    <p>Full shop, sell system, bounties, coinflip, taxes.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">🔱</span>
    <h4>God Items</h4>
    <p>21 unique weapons, tools, and armor sets with special abilities.</p>
  </div>
</div>
`,

/* ────────────── SERVER STORE — RANKS ────────────── */
"store-ranks": `
<h2>Server Ranks</h2>
<p>Support the server and unlock exclusive perks, kits, and commands. Each rank includes all perks from the rank below it.</p>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>

<div class="rank-card knight">
  <div class="rank-header">
    <img src="images/knight.png" alt="Knight" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#4ade80;margin:0">Knight</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Starter Rank</p>
    </div>
  </div>
  <h4>Perks</h4>
  <div class="perk-grid">
    <span class="perk"><code>/anvil</code></span>
    <span class="perk"><code>/craft</code></span>
    <span class="perk"><code>/enderchest</code></span>
    <span class="perk"><code>/grindstone</code></span>
    <span class="perk"><code>/feed</code></span>
    <span class="perk"><code>/hat</code></span>
    <span class="perk"><code>/kit knight</code></span>
    <span class="perk"><code>/repair</code> (120s cooldown)</span>
    <span class="perk"><code>/pv 3</code></span>
  </div>
  <h4>Knight Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Diamond Helmet</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Chestplate</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Leggings</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Boots</td><td>Protection II, Unbreaking I, Feather Falling I</td></tr>
    <tr><td>Diamond Sword</td><td>Sharpness II, Unbreaking I</td></tr>
    <tr><td>Diamond Pickaxe</td><td>Efficiency II, Unbreaking I</td></tr>
    <tr><td>Shield</td><td>Unbreaking I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Cobblestone, 32 Oak Planks, 32 Cooked Beef, 2 Golden Apples</p>
</div>

<div class="rank-card warlord">
  <div class="rank-header">
    <img src="images/warlord.png" alt="Warlord" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#a78bfa;margin:0">Warlord</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Knight perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk"><code>/repair</code> (60s cooldown)</span>
    <span class="perk"><code>/repairall</code> (1200s cooldown)</span>
    <span class="perk"><code>/kit warlord</code></span>
    <span class="perk"><code>/fly</code></span>
    <span class="perk"><code>/pv 5</code></span>
  </div>
  <h4>Warlord Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Diamond Helmet</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Chestplate</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Leggings</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Boots</td><td>Protection III, Unbreaking II, Feather Falling II</td></tr>
    <tr><td>Diamond Sword</td><td>Sharpness III, Unbreaking II, Fire Aspect I</td></tr>
    <tr><td>Diamond Pickaxe</td><td>Efficiency III, Unbreaking II, Fortune I</td></tr>
    <tr><td>Shield</td><td>Unbreaking II</td></tr>
    <tr><td>Bow</td><td>Power II, Unbreaking I, Infinity I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 32 Arrows, 64 Cobblestone, 64 Oak Planks, 64 Cooked Beef, 4 Golden Apples</p>
</div>

<div class="rank-card titan">
  <div class="rank-header">
    <img src="images/titan.png" alt="Titan" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#f87171;margin:0">Titan</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Warlord perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk">Keep Experience on death</span>
    <span class="perk">Priority in events &amp; tickets</span>
    <span class="perk"><code>/kit titan</code></span>
    <span class="perk"><code>/pv 5</code></span>
  </div>
  <h4>Titan Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Netherite Helmet</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Chestplate</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Leggings</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Boots</td><td>Protection II, Unbreaking I, Feather Falling I</td></tr>
    <tr><td>Netherite Sword</td><td>Sharpness II, Unbreaking I, Sweeping Edge I</td></tr>
    <tr><td>Netherite Pickaxe</td><td>Efficiency II, Unbreaking I, Fortune I</td></tr>
    <tr><td>Shield</td><td>Unbreaking I</td></tr>
    <tr><td>Bow</td><td>Power II, Unbreaking I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Arrows, 128 Cobblestone, 64 Oak Planks, 64 Cooked Beef, 8 Golden Apples, 2 Ender Pearls</p>
</div>

<div class="rank-card conqueror">
  <div class="rank-header">
    <img src="images/conqueror.png" alt="Conqueror" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#d4a843;margin:0">Conqueror</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Titan perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk">Second Chance in Wars</span>
    <span class="perk"><code>/kit conqueror</code></span>
    <span class="perk"><code>/pv 9</code></span>
  </div>
  <h4>Conqueror Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Netherite Helmet</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Chestplate</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Leggings</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Boots</td><td>Protection III, Unbreaking II, Feather Falling II</td></tr>
    <tr><td>Netherite Sword</td><td>Sharpness III, Unbreaking II, Sweeping Edge II</td></tr>
    <tr><td>Netherite Pickaxe</td><td>Efficiency III, Unbreaking II, Fortune II</td></tr>
    <tr><td>Netherite Axe</td><td>Sharpness II, Efficiency III</td></tr>
    <tr><td>Shield</td><td>Unbreaking II</td></tr>
    <tr><td>Bow</td><td>Power III, Unbreaking II, Flame I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Arrows, 192 Cobblestone, 128 Oak Planks, 64 Cooked Beef, 16 Golden Apples, 1 Enchanted Golden Apple, 4 Ender Pearls, 1 Totem of Undying</p>
</div>
`,

/* ────────────── SERVER STORE — GOD LOOT BOX ────────────── */
"store-lootbox": `
<h2>God Loot Box</h2>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>
<p>The <strong>God Loot Box</strong> is the ultimate crate available in the server store. Each box gives you <strong>3 random God Items</strong> — legendary weapons, armor, and tools with unique abilities and maxed enchantments.</p>

<div class="card">
  <h4>What You Get</h4>
  <ul>
    <li><strong>3 Random God Items</strong> per box from the pool below</li>
    <li>All God Items have custom abilities, maxed enchantments, and are unbreakable</li>
    <li>Includes swords, axes, bows, armor sets, pickaxes, elytra, and more</li>
  </ul>
</div>

<h3>How It Works</h3>
<ol>
  <li>Purchase a God Loot Box from the server store</li>
  <li>You receive a <strong>Loot Box key</strong> in-game</li>
  <li>Use <code>/lootboxes</code> to open the crate GUI</li>
  <li>Watch the animated spin and claim your 3 God Items</li>
</ol>

<h3>God Items in the Loot Pool</h3>

<h4>Weapons</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#aaffe0">Wind Blade</strong></td><td>Netherite Sword</td><td><strong>Jetstream</strong> — Launch into the sky and take controlled flight. Enemies near landing take damage. <em>(16s CD)</em></td></tr>
  <tr><td><strong style="color:#64ffd8">Serpent's Fang</strong></td><td>Netherite Sword</td><td><strong>Tidal Barrage</strong> — Rapid 3-hit combo on attack. <strong>Riptide Lunge</strong> — Surge through water striking all enemies. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#ff8c00">Ember Edge</strong></td><td>Netherite Sword</td><td><strong>Scorching Strikes</strong> — Sets targets on fire. <strong>Inferno Burst</strong> — 3-block fire AoE. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#b400c8">Shadow Blade</strong></td><td>Netherite Sword</td><td><strong>Backstab</strong> — +25% damage from behind. <strong>Ghastly Step</strong> — Invisibility + Speed II for 4s. <em>(20s CD)</em></td></tr>
  <tr><td><strong style="color:#ff6040">Soulstealer</strong></td><td>Netherite Sword</td><td><strong>Crimson Pact</strong> — Kills restore HP/hunger + Speed. <strong>Deathbringer</strong> — AoE damage + knockback. <em>(25s CD)</em></td></tr>
  <tr><td><strong style="color:#50a0f0">Frostbite</strong></td><td>Netherite Axe</td><td><strong>Chilling Strikes</strong> — 20% chance Slowness I. <strong>Frost Nova</strong> — AoE Slowness II + Mining Fatigue. <em>(18s CD)</em></td></tr>
  <tr><td><strong style="color:#dc64ff">Gravity Bow</strong></td><td>Bow</td><td><strong>Black Hole</strong> — Arrow creates a gravity well pulling in all nearby enemies. <em>(45s CD)</em></td></tr>
  <tr><td><strong style="color:#ffe080">Giant Broadsword</strong></td><td>Netherite Sword</td><td><strong>Unbreakable</strong> — Channel for 1s, then gain Strength, Resistance, and heal every 2s for 10s. Can overheal. <em>(70s CD)</em></td></tr>
</table>

<h4>Tools</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#c8a050">Terraforge</strong></td><td>Netherite Pickaxe</td><td><strong>Miner's Instinct</strong> — Insta-breaks all blocks. <strong>Earthquake</strong> — AoE damage + launch enemies. <em>(15s CD)</em></td></tr>
</table>

<h4>Armor — Titan Set</h4>
<p>Full set grants <strong>Resistance I</strong> permanently.</p>
<table>
  <tr><th>Item</th><th>Slot</th><th>Passive</th></tr>
  <tr><td><strong style="color:#ffc830">Titan's Crown</strong></td><td>Helmet</td><td><strong>Titan's Sight</strong> — Night Vision in dark areas</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Guard</strong></td><td>Chestplate</td><td><strong>Titan's Heart</strong> — +1 heart max health</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Stride</strong></td><td>Leggings</td><td><strong>Titan's Stride</strong> — Speed I while sprinting</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Treads</strong></td><td>Boots</td><td><strong>Titan's Landing</strong> — No fall damage up to 10 blocks</td></tr>
</table>

<h4>Special</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#d0b0ff">Celestial Wings</strong></td><td>Elytra</td><td><strong>Skyfall Boost</strong> — Press SHIFT while gliding to propel forward (no rockets needed). <strong>Cloud Walker</strong> — Reduced fall damage.</td></tr>
</table>

<div class="info-box warn">
  <strong>Note:</strong> God Items are permanent and unbreakable. They cannot be crafted — the only way to obtain them is through Loot Boxes or special events.
</div>
`,

/* ────────────── SERVER STORE — SPRING KEY ────────────── */
"store-spring": `
<h2>Spring Key</h2>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>
<p>The <strong>Spring Key</strong> is a seasonal crate key that unlocks the exclusive <strong>Spring God Items</strong> — a nature-themed collection of legendary weapons and the full <strong>Bloomguard Armor Set</strong>.</p>

<div class="card">
  <h4>What You Get</h4>
  <ul>
    <li>A random <strong>Spring God Item</strong> from the pool below</li>
    <li>Spring items are team-oriented with healing, buffing, and crowd-control abilities</li>
    <li>The Bloomguard set has a powerful <strong>set bonus</strong> that heals your entire team</li>
  </ul>
</div>

<h3>Spring God Items</h3>

<h4>Weapons</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#f06498">Briar Thorn</strong></td><td>Netherite Sword</td><td><strong>Spreading Thorns</strong> — Marks enemies; allies popping the mark deal 1.5 bonus hearts + Slowness. <strong>Vine Snare</strong> — Root all enemies within 4 blocks for 2.5s, allies gain Speed I. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#f58282">Harvest Scythe</strong></td><td>Netherite Hoe</td><td><strong>Reaping Arc</strong> — Sweeping hits heal 0.5 hearts per enemy hit. <strong>Petal Storm</strong> — 6-block petal ring dealing 2 hearts + knockback + Blindness. <em>(15s CD)</em></td></tr>
  <tr><td><strong style="color:#e63290">Seedling Staff</strong></td><td>Netherite Shovel</td><td><strong>Bloom Barrier</strong> — Place a 3x3 leaf wall at target block (within 10 blocks). Lasts 8s. Blocks arrows and line of sight. <em>(25s CD)</em></td></tr>
</table>

<h4>Armor — Bloomguard Set</h4>
<p>Full set grants <strong>Regeneration I</strong> for you and all allies within 8 blocks.</p>
<table>
  <tr><th>Item</th><th>Slot</th><th>Passive</th></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Crown</strong></td><td>Helmet</td><td><strong>War Bloom</strong> — When you take damage, allies within 6 blocks gain Absorption for 3s <em>(8s CD)</em></td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Plate</strong></td><td>Chestplate</td><td><strong>Bark Skin</strong> — Below 5 hearts, gain Resistance I for 2s when hit <em>(6s CD)</em></td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Greaves</strong></td><td>Leggings</td><td><strong>Rally Roots</strong> — While sprinting, allies within 5 blocks also get Speed I</td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Roots</strong></td><td>Boots</td><td><strong>Grounded</strong> — Immune to knockback while sneaking</td></tr>
</table>

<div class="info-box">
  <strong>Tip:</strong> The Bloomguard set is designed for team support. Pair the full armor set with Briar Thorn for maximum team synergy — your allies will trigger the thorn marks while you keep everyone healed.
</div>
`,

/* ────────────── QUICK START ────────────── */
quickstart: `
<h2>Quick Start Guide</h2>
<p>Get up and running on EarthWars in five minutes.</p>

<h3>Step 1 — Join &amp; Tutorial</h3>
<p>When you first join, you'll spawn in the <strong>Safe Zone</strong>. A guided tutorial walks you through the basics. Complete it to earn starter rewards.</p>

<h3>Step 2 — Create or Join a Country</h3>
<ul>
  <li><code>/country create &lt;name&gt;</code> — Start your own nation</li>
  <li><code>/country join &lt;name&gt;</code> — Request to join an existing one</li>
</ul>

<h3>Step 3 — Claim Territory</h3>
<p>Stand in a chunk and run <code>/c claim</code>. Your country's territory grows chunk by chunk. Build walls with <code>/c wall</code> for extra defense.</p>

<h3>Step 4 — Grow &amp; Fight</h3>
<ul>
  <li>Mine <strong>Valuable Blocks</strong> to unlock country perks</li>
  <li>Level up <strong>Skills</strong> with <code>/skills</code></li>
  <li>Acquire <strong>Custom Enchants</strong> and <strong>God Items</strong></li>
  <li>Declare <strong>War</strong> on rival nations with <code>/war declare &lt;country&gt;</code></li>
</ul>

<div class="info-box success">Tip: Open the shop with <code>/shop</code> to buy &amp; sell resources early.</div>
`,

/* ────────────── COUNTRIES ────────────── */
countries: `
<h2>Country System</h2>
<p>Countries are the core unit of EarthWars. Players band together under a national banner to claim land, build, and wage war.</p>

<h3>Creating a Country</h3>
<div class="card">
  <p><code>/country create &lt;name&gt;</code> — Creates a new country. You become the <strong>Leader</strong>.</p>
  <p>Country names must be 3–20 characters, alphanumeric, and unique.</p>
</div>

<h3>Country Info</h3>
<ul>
  <li><code>/c info</code> — View your country's stats</li>
  <li><code>/c info &lt;name&gt;</code> — View another country's public stats</li>
  <li><code>/c list</code> — List all countries</li>
  <li><code>/c online</code> — See online members</li>
</ul>

<h3>Managing Members</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite a player to your country</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Remove a member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Promote to a higher rank</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Demote to a lower rank</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave your current country</td></tr>
  <tr><td><code>/c disband</code></td><td>Disband the country (Leader only)</td></tr>
</table>

<h3>Country Settings</h3>
<ul>
  <li><code>/c setspawn</code> — Set the country spawn</li>
  <li><code>/c spawn</code> — Teleport to country spawn</li>
  <li><code>/c rename &lt;name&gt;</code> — Rename the country</li>
  <li><code>/c description &lt;text&gt;</code> — Set a public description</li>
</ul>
`,

/* ────────────── RANKS ────────────── */
ranks: `
<h2>Ranks &amp; Permissions</h2>
<p>Every country has a rank hierarchy that determines what members can do.</p>

<h3>Default Ranks</h3>
<table>
  <tr><th>Rank</th><th>Permissions</th></tr>
  <tr><td><span class="badge leader">Leader</span></td><td>Full control — manage members, declare wars, set ranks, disband</td></tr>
  <tr><td><span class="badge admin">Co-Leader</span></td><td>Invite/kick, manage claims, build walls, set ranks below co-leader</td></tr>
  <tr><td><strong>General</strong></td><td>Claim, build, interact, access country storage</td></tr>
  <tr><td><strong>Member</strong></td><td>Build, interact in claimed territory</td></tr>
  <tr><td><strong>Recruit</strong></td><td>Limited — cannot break, place, or interact without permission</td></tr>
</table>

<h3>Rank Permissions</h3>
<p>Leaders and Co-Leaders can configure what each rank can do:</p>
<ul>
  <li><strong>BUILD</strong> — Place blocks in territory</li>
  <li><strong>BREAK</strong> — Break blocks in territory</li>
  <li><strong>INTERACT</strong> — Use doors, chests, buttons, etc.</li>
  <li><strong>CLAIM</strong> — Claim new chunks</li>
  <li><strong>INVITE</strong> — Invite new members</li>
</ul>

<div class="info-box warn">Recruits have no permissions by default. Leaders must manually grant them access.</div>
`,

/* ────────────── GOVERNMENT ────────────── */
government: `
<h2>Government Types</h2>
<p>Each country can choose a government type that provides passive bonuses.</p>

<table>
  <tr><th>Type</th><th>Bonus</th></tr>
  <tr><td>Democracy</td><td>+10% tax income, members can vote on decisions</td></tr>
  <tr><td>Monarchy</td><td>+15% claim radius, leader gets bonus perks</td></tr>
  <tr><td>Dictatorship</td><td>+20% war damage, faster declarations</td></tr>
  <tr><td>Republic</td><td>Balanced bonuses across all stats</td></tr>
  <tr><td>Anarchy</td><td>No upkeep costs, but no diplomatic bonuses</td></tr>
</table>

<p>Change government with <code>/c government &lt;type&gt;</code>. 7-day cooldown between changes.</p>
`,

/* ────────────── CLAIMS ────────────── */
claims: `
<h2>Claims &amp; Territory</h2>
<p>Territory is claimed in 16×16 chunks. Your country's power determines how much land you can hold.</p>

<h3>Claiming Land</h3>
<ul>
  <li><code>/c claim</code> — Claim the chunk you're standing in</li>
  <li><code>/c unclaim</code> — Unclaim a chunk</li>
  <li><code>/c autoclaim</code> — Auto-claim chunks as you walk</li>
  <li><code>/c map</code> — View a text-based map of nearby claims</li>
</ul>

<h3>Claim Rules</h3>
<div class="card">
  <ul>
    <li>New claims must be <strong>adjacent</strong> to existing territory</li>
    <li>Cannot claim inside another country's territory</li>
    <li>Max claim limit is based on member count and perks</li>
    <li>Valuable Blocks can increase your claim limit</li>
  </ul>
</div>

<h3>Fly in Territory</h3>
<p>If your country unlocks the <strong>Claim Flight</strong> perk (via Valuable Blocks), members automatically gain flight when entering owned territory. Use <code>/c fly</code> to toggle manually.</p>
`,

/* ────────────── WALLS ────────────── */
walls: `
<h2>Walls &amp; Defense</h2>
<p>Walls provide an extra layer of defense during war. They do <strong>not</strong> grant territory — they protect it.</p>

<h3>Building Walls</h3>
<ul>
  <li><code>/c wall</code> — Open the wall management menu</li>
  <li>Walls are built around your claimed territory</li>
  <li>Walls have levels that determine their HP</li>
</ul>

<h3>Wall Mechanics in War</h3>
<div class="card">
  <h4>Attack Order</h4>
  <ol>
    <li>Attackers must first <strong>siege all outer chunks</strong> (outside the wall)</li>
    <li>Only after outer chunks are captured can the wall be <strong>damaged</strong></li>
    <li>Destroying the wall does <strong>NOT</strong> transfer chunks</li>
    <li>Attackers must then <strong>siege inner chunks</strong> manually</li>
  </ol>
</div>

<h3>Wall HP Boss Bar</h3>
<p>When attacking a wall during war, a boss bar shows the wall's current HP, level, and owning country. Bar color changes based on remaining HP.</p>

<div class="info-box warn">Walls are defensive only. Destroying them never automatically grants territory.</div>
`,

/* ────────────── DIPLOMACY ────────────── */
diplomacy: `
<h2>Diplomacy &amp; Alliances</h2>
<p>Countries can form alliances, trade agreements, and diplomatic relationships.</p>

<h3>Alliance System</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Send an alliance request</td></tr>
  <tr><td><code>/c unally &lt;country&gt;</code></td><td>Break an alliance</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark as an enemy</td></tr>
</table>

<h3>Alliance Benefits</h3>
<ul>
  <li>Allied players cannot damage each other</li>
  <li>Shared territory access (configurable)</li>
  <li>Joint war declarations</li>
</ul>

<h3>Espionage</h3>
<p>Scout enemy territory to reveal claim layouts and wall HP. Costs in-game currency.</p>
`,

/* ────────────── VISAS ────────────── */
visas: `
<h2>Visas &amp; Greencards</h2>
<p>Countries can issue visas and greencards to players from other nations, granting limited access to your territory.</p>

<h3>Visa Types</h3>
<ul>
  <li><strong>Visitor Visa</strong> — Allows entry to territory, no building</li>
  <li><strong>Work Visa</strong> — Allows building and interaction in specified plots</li>
  <li><strong>Greencard</strong> — Full access as if the player were a member, without actually joining the country</li>
</ul>

<h3>Managing Visas</h3>
<ul>
  <li><code>/c visa grant &lt;player&gt; &lt;type&gt;</code> — Grant a visa</li>
  <li><code>/c visa revoke &lt;player&gt;</code> — Revoke a visa</li>
  <li><code>/c visa list</code> — List all active visas</li>
</ul>
`,

/* ────────────── TAXES ────────────── */
taxes: `
<h2>Taxes &amp; Treasury</h2>
<p>Countries require upkeep and can collect taxes from members.</p>

<h3>Upkeep</h3>
<ul>
  <li>Daily cost based on number of claimed chunks</li>
  <li>Funded from the country treasury</li>
  <li>If treasury runs dry, territory starts to decline</li>
</ul>

<h3>Tax System</h3>
<ul>
  <li><code>/c tax set &lt;%&gt;</code> — Set the tax rate (Leader only)</li>
  <li>A percentage of member earnings goes to the treasury</li>
  <li><code>/c deposit &lt;amount&gt;</code> — Deposit directly to treasury</li>
  <li><code>/c withdraw &lt;amount&gt;</code> — Withdraw from treasury (Leader/Co-Leader)</li>
</ul>
`,

/* ────────────── DECLINE ────────────── */
decline: `
<h2>Decline &amp; Annexation</h2>
<p>Countries that become inactive slowly lose territory and may be annexed.</p>

<h3>Decline Mechanics</h3>
<ul>
  <li>If all members are offline for <strong>7+ days</strong>, the country enters <strong>Decline</strong></li>
  <li>Declining countries lose 1 chunk per day from the edges</li>
  <li>Any member logging back in stops the decline</li>
</ul>

<h3>Annexation</h3>
<p>A fully declined country (0 claims) is automatically disbanded. Nearby countries can annex freed chunks.</p>
`,

/* ────────────── PLOTS ────────────── */
plots: `
<h2>Plots &amp; Colonies</h2>

<h3>Plots</h3>
<p>Leaders can subdivide territory into plots for individual members.</p>
<ul>
  <li><code>/c plot create</code> — Create a plot in the current chunk</li>
  <li><code>/c plot assign &lt;player&gt;</code> — Assign to a member</li>
  <li><code>/c plot remove</code> — Remove a plot</li>
</ul>
<p>Plot owners have full build/break/interact regardless of rank.</p>

<h3>Colonies</h3>
<p>Colonies are separate claim clusters not connected to main territory. They require additional upkeep but can serve as forward bases in war.</p>
`,

/* ────────────── WAR ────────────── */
war: `
<h2>War System</h2>
<p>Wars are the primary way countries conquer territory. The system is designed for tactical, multi-phase combat.</p>

<h3>Declaring War</h3>
<div class="card">
  <p><code>/war declare &lt;country&gt;</code> — Costs in-game currency. Defenders receive a warning. After a preparation period the war goes <strong>ACTIVE</strong>.</p>
</div>

<h3>War Phases</h3>
<table>
  <tr><th>Phase</th><th>Description</th></tr>
  <tr><td>Preparation</td><td>Both sides receive warning; time to prepare</td></tr>
  <tr><td>Active</td><td>Attackers can siege outer chunks and damage walls</td></tr>
  <tr><td>Wall Breach</td><td>Walls destroyed; inner territory exposed</td></tr>
  <tr><td>Resolution</td><td>War ends when objectives met or time runs out</td></tr>
</table>

<h3>War Flow (with Walls)</h3>
<ol>
  <li>Siege outer chunks first (outside walls)</li>
  <li>Once captured, damage the wall</li>
  <li>Wall destruction exposes inner territory</li>
  <li>Siege inner chunks to fully conquer</li>
</ol>

<h3>Commands</h3>
<ul>
  <li><code>/war declare &lt;country&gt;</code> — Start a war</li>
  <li><code>/war status</code> — View active wars</li>
  <li><code>/war continue</code> — Pay to extend the war</li>
  <li><code>/war surrender</code> — End the war (losing side)</li>
</ul>

<div class="info-box danger">If they have walls, siege outer chunks first! Walls can only be damaged after outer territory is captured.</div>
`,

/* ────────────── SIEGES ────────────── */
siege: `
<h2>Sieges</h2>
<p>Sieges are how attackers capture individual chunks during an active war.</p>

<h3>Starting a Siege</h3>
<ul>
  <li><code>/siege start</code> — Begin sieging the chunk you're in</li>
  <li>Must be in enemy territory during an active war</li>
  <li>Outer chunks must be sieged before walls can be attacked</li>
</ul>

<h3>Siege Mechanics</h3>
<div class="card">
  <ul>
    <li>Sieging takes time — stay in the chunk to maintain progress</li>
    <li>Defenders can contest by entering the chunk</li>
    <li>If attacker is killed or leaves, the siege stalls</li>
    <li>Successfully captured chunks transfer to the attacker</li>
  </ul>
</div>
`,

/* ────────────── COMBAT ────────────── */
combat: `
<h2>Combat &amp; PvP</h2>
<p>Enhanced combat with custom mechanics, enchants, and combat tagging.</p>

<h3>Combat Tag</h3>
<ul>
  <li>Attacking or being attacked places you <strong>in combat</strong> for 15 seconds</li>
  <li>Cannot enter safe zones while tagged</li>
  <li>Logging out in combat = death</li>
</ul>

<h3>Ender Pearl Cooldown</h3>
<div class="card">
  <p>While in combat, ender pearls have a <strong>10-second cooldown</strong>. Use them tactically — no pearl spam.</p>
</div>

<h3>Moshpit Zones</h3>
<p>Designated free-for-all PvP arenas. Protection plugins are overridden so players can fight freely.</p>

<h3>Anti-Collision</h3>
<p>Player collision is globally disabled to prevent push exploits.</p>
`,

/* ────────────── BOMBS ────────────── */
bombs: `
<h2>TNT &amp; Bombs</h2>
<p>Explosives play a tactical role in wars and sieges.</p>

<h3>TNT Usage</h3>
<ul>
  <li>TNT can damage enemy walls during active wars</li>
  <li>Damage scales with wall level</li>
  <li>TNT does not work in safe zones</li>
  <li>Friendly territory is protected from TNT</li>
</ul>

<h3>Bombs</h3>
<div class="card">
  <p>Special craftable bombs deal extra wall damage. Purchase from the shop or craft with rare materials.</p>
</div>
`,

/* ────────────── SKILLS ────────────── */
skills: `
<h2>Skills (30 Perks)</h2>
<p>The skill system lets individual players specialize with powerful perks.</p>

<h3>Opening the Menu</h3>
<p><code>/skills</code> — Opens the interactive skill GUI</p>

<h3>How It Works</h3>
<ul>
  <li>Earn XP by mining, fighting, farming, and completing tasks</li>
  <li>Spend skill points to unlock perks across 6 trees</li>
  <li>50 levels per tree, 7x XP scaling</li>
  <li>30 unique perks available</li>
</ul>

<h3>Skill Trees</h3>
<table>
  <tr><th>Tree</th><th>Example Perks</th></tr>
  <tr><td>Combat</td><td>Increased melee damage, lifesteal, crit chance</td></tr>
  <tr><td>Mining</td><td>Auto-smelt, fortune boost, haste</td></tr>
  <tr><td>Farming</td><td>Replanting, double drops, growth boost</td></tr>
  <tr><td>Defense</td><td>Damage reduction, fire resistance, knockback resist</td></tr>
  <tr><td>Archery</td><td>Arrow damage, multi-shot, tracking</td></tr>
  <tr><td>Utility</td><td>Speed boost, night vision, extra hearts</td></tr>
</table>

<div class="info-box">Skill progress is saved per-player and persists across sessions.</div>
`,

/* ────────────── VALUABLE BLOCKS ────────────── */
valuable: `
<h2>Valuable Blocks</h2>
<p>Mining and storing valuable blocks in your territory unlocks country-wide perks for all members.</p>

<h3>How It Works</h3>
<ol>
  <li>Place valuable blocks (diamond, emerald, netherite, etc.) in your territory</li>
  <li>The server counts your country's total valuable blocks</li>
  <li>Hit milestones to unlock passive perks</li>
</ol>

<h3>Available Perks</h3>
<table>
  <tr><th>Perk</th><th>Tier</th><th>Effect</th></tr>
  <tr><td>Extra Claims</td><td>Low</td><td>Increased max claim limit</td></tr>
  <tr><td>Member Slots</td><td>Mid</td><td>More members can join</td></tr>
  <tr><td>Defense Boost</td><td>High</td><td>Reduced damage in own territory</td></tr>
  <tr><td>Claim Flight</td><td>High</td><td>All members can fly in owned territory (auto-enabled)</td></tr>
</table>

<div class="info-box success">Claim Flight activates automatically in your territory — no command needed. Toggle with <code>/c fly</code>.</div>
`,

/* ────────────── CUSTOM ENCHANTS ────────────── */
enchants: `
<h2>Custom Enchants</h2>
<p>13 unique custom enchantments separate from vanilla enchants.</p>

<h3>Obtaining</h3>
<ul>
  <li>Purchase books from <code>/shop</code></li>
  <li>Find them in <strong>Loot Boxes</strong></li>
  <li>Earn as <strong>dungeon rewards</strong></li>
</ul>

<h3>Enchant Books</h3>
<div class="card">
  <p>Custom enchant books display detailed info in their lore:</p>
  <ul>
    <li><strong>Enchant Name &amp; Level</strong></li>
    <li><strong>Description</strong> — What it does</li>
    <li><strong>Max Level</strong></li>
    <li><strong>Applies To</strong> — Which items (Swords, Pickaxes, Armor, etc.)</li>
  </ul>
  <p>Apply by dragging the book onto an item in an anvil.</p>
</div>

<h3>Enchant List</h3>
<table>
  <tr><th>Enchant</th><th>Effect</th><th>Applies To</th></tr>
  <tr><td>Gravity Bow</td><td>Pulls targets toward you (+35% damage)</td><td>Bows</td></tr>
  <tr><td>Replant</td><td>Auto-replants crops on harvest</td><td>Hoes</td></tr>
  <tr><td>Earthquake</td><td>AoE ground slam damage</td><td>Swords, Axes</td></tr>
  <tr><td>Tracking</td><td>Arrows home toward nearest enemy</td><td>Bows</td></tr>
  <tr><td>Lifesteal</td><td>Heal on hit</td><td>Swords</td></tr>
  <tr><td>Venom</td><td>Poison targets on hit</td><td>Swords</td></tr>
  <tr><td>Thunderstrike</td><td>Lightning strike chance on hit</td><td>Swords, Axes</td></tr>
  <tr><td>Frost Aspect</td><td>Slow enemies on hit</td><td>Swords</td></tr>
  <tr><td>Explosive</td><td>Small explosion on arrow impact</td><td>Bows</td></tr>
  <tr><td>Telepathy</td><td>Mined blocks go directly to inventory</td><td>Pickaxes</td></tr>
  <tr><td>Auto-Smelt</td><td>Automatically smelts mined ores</td><td>Pickaxes</td></tr>
  <tr><td>Harvester</td><td>Large-area crop harvesting</td><td>Hoes</td></tr>
  <tr><td>Soulbound</td><td>Keep item on death</td><td>Any</td></tr>
</table>
`,

/* ────────────── DUNGEONS ────────────── */
dungeons: `
<h2>Dungeons</h2>
<p>PvE dungeon encounters where parties face powerful bosses for epic loot.</p>

<h3>How to Enter</h3>
<ul>
  <li>Find dungeon portals in the world or use <code>/dungeon</code></li>
  <li>Form a party of 1–4 players</li>
  <li>Navigate parkour, torch rooms, and combat waves</li>
</ul>

<h3>The Wraith (Final Boss)</h3>
<div class="card">
  <h4>Boss Abilities</h4>
  <table>
    <tr><th>Ability</th><th>Description</th></tr>
    <tr><td>Swipe Attack</td><td>AoE melee — hits ALL players within 4.5 blocks</td></tr>
    <tr><td>Teleport</td><td>Warps to locked-on player if 2+ blocks away</td></tr>
    <tr><td>Soul Drain</td><td>Channeled damage that heals the Wraith</td></tr>
    <tr><td>Spectral Strike</td><td>High damage single-target slam</td></tr>
    <tr><td>Soul Pillars</td><td>Summons pillars — <strong>critical hits only</strong> to destroy</td></tr>
    <tr><td>Enrage</td><td>At low HP, damage and speed increase massively</td></tr>
  </table>
</div>

<div class="info-box danger">Soul Pillars can only be damaged by critical hits! (Jump and strike while falling.)</div>

<h3>Loot</h3>
<p>Defeating the boss drops God Items, custom enchant books, rare materials, and currency.</p>
`,

/* ────────────── PLAYTIME ────────────── */
playtime: `
<h2>Playtime Rewards</h2>
<p>Earn rewards just by playing on the server.</p>

<ul>
  <li>Rewards given at set playtime thresholds</li>
  <li>Includes money, items, crate keys, and cosmetics</li>
  <li>Check your playtime with <code>/playtime</code></li>
</ul>
`,

/* ────────────── GOD ITEMS ────────────── */
goditems: `
<h2>God Items (21+)</h2>
<p>Legendary items with unique abilities beyond vanilla Minecraft.</p>

<h3>Obtaining God Items</h3>
<ul>
  <li>Dungeon boss drops</li>
  <li>Loot Box rewards</li>
  <li>Special event prizes</li>
  <li>Admin shop (limited availability)</li>
</ul>

<h3>Item Tiers</h3>
<table>
  <tr><th>Tier</th><th>Color</th><th>Power Level</th></tr>
  <tr><td>Legendary</td><td style="color:var(--gold)">Gold</td><td>Maximum — game-changing abilities</td></tr>
  <tr><td>Epic</td><td style="color:var(--purple)">Purple</td><td>High — strong unique effects</td></tr>
  <tr><td>Rare</td><td style="color:var(--accent)">Blue</td><td>Moderate — useful passive bonuses</td></tr>
</table>

<div class="info-box">God items are soulbound — cannot be dropped or traded. Persist through death.</div>
`,

/* ────────────── LOOT BOXES ────────────── */
lootbox: `
<h2>Loot Boxes</h2>
<p>Randomized reward crates ranging from common items to legendary God Items.</p>

<h3>Types</h3>
<ul>
  <li><strong>Common Crate</strong> — Basic resources and money</li>
  <li><strong>Rare Crate</strong> — Custom enchant books, rare items</li>
  <li><strong>Legendary Crate</strong> — God Items, large money prizes</li>
</ul>

<h3>Obtaining Keys</h3>
<ul>
  <li>Playtime rewards</li>
  <li>Event prizes</li>
  <li>Server store</li>
  <li>Vote rewards</li>
</ul>
`,

/* ────────────── KITS ────────────── */
kits: `
<h2>Kits</h2>
<p>Pre-made item sets on a cooldown timer.</p>
<ul>
  <li><code>/kit</code> — Open the kit selection GUI</li>
  <li>Different kits available based on rank/perks</li>
  <li>Individual cooldowns (e.g., 24h for starter kit)</li>
</ul>
`,

/* ────────────── VOUCHERS ────────────── */
vouchers: `
<h2>Vouchers</h2>
<p>Redeemable items that grant rewards when right-clicked.</p>

<h3>Types</h3>
<ul>
  <li><strong>Money Voucher</strong> — Grants currency</li>
  <li><strong>XP Voucher</strong> — Grants experience levels</li>
  <li><strong>Rank Voucher</strong> — Temporary rank upgrades</li>
  <li><strong>Crate Key Voucher</strong> — Redeems for loot box keys</li>
</ul>
<p>Right-click the voucher in your hand to redeem.</p>
`,

/* ────────────── WANDS ────────────── */
wands: `
<h2>Wands</h2>
<p>Building wands help construct structures faster.</p>

<div class="card">
  <h4>Building Wand</h4>
  <ul>
    <li>Right-click a block face to extend in that direction</li>
    <li>Consumes matching blocks from inventory</li>
    <li>Preview mode shows placement before confirming</li>
    <li>Works in your own claimed territory only</li>
  </ul>
</div>
`,

/* ────────────── MOB CATCHER ────────────── */
mobcatcher: `
<h2>Mob Catcher</h2>
<p>Capture mobs and relocate them anywhere in your territory.</p>

<ul>
  <li>Right-click a mob with the Mob Catcher egg to capture</li>
  <li>Right-click ground to release</li>
  <li>Works on most passive and neutral mobs</li>
  <li>Hostile mobs and bosses cannot be captured</li>
</ul>
`,

/* ────────────── SPAWNERS ────────────── */
spawners: `
<h2>Spawners</h2>
<p>Spawners can be obtained and placed for mob farming.</p>

<h3>Obtaining</h3>
<ul>
  <li>Mine spawners with <strong>Silk Touch</strong> to pick them up</li>
  <li>Purchase from the shop</li>
</ul>

<h3>Rules</h3>
<ul>
  <li>Only work in claimed territory</li>
  <li>Limit on spawners per chunk</li>
  <li>Can be upgraded for faster spawn rates</li>
</ul>
`,

/* ────────────── ECONOMY ────────────── */
economy: `
<h2>Economy &amp; Shop</h2>
<p>Server economy based on in-game currency earned through gameplay.</p>

<h3>Earning Money</h3>
<ul>
  <li>Sell items at <code>/shop</code></li>
  <li>Kill mobs and players</li>
  <li>Complete quests and events</li>
  <li>Collect bounties</li>
</ul>

<h3>Shop Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open the buy/sell GUI</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell item you're holding</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell all sellable items</td></tr>
  <tr><td><code>/bal</code></td><td>Check balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amount&gt;</code></td><td>Send money</td></tr>
</table>
`,

/* ────────────── BOUNTIES ────────────── */
bounty: `
<h2>Bounties</h2>
<p>Place bounties on enemy players for others to collect.</p>

<ul>
  <li><code>/bounty set &lt;player&gt; &lt;amount&gt;</code> — Place a bounty</li>
  <li><code>/bounty list</code> — View active bounties</li>
  <li>Kill a bountied player to collect the reward</li>
</ul>
`,

/* ────────────── COINFLIP ────────────── */
coinflip: `
<h2>Coinflip</h2>
<p>Gamble your money against other players in a 50/50 coinflip.</p>

<ul>
  <li><code>/coinflip &lt;amount&gt;</code> — Create a wager</li>
  <li>Another player accepts the challenge</li>
  <li>Winner takes all (minus small server tax)</li>
</ul>
`,

/* ────────────── TRADE ────────────── */
trade: `
<h2>Trade System</h2>
<p>Secure player-to-player trading.</p>

<div class="card">
  <p><code>/trade &lt;player&gt;</code> — Send a trade request</p>
  <p>A secure GUI opens where both players add items and money. Both must confirm before the trade executes. No risk of scamming.</p>
</div>
`,

/* ────────────── CHAT ────────────── */
chat: `
<h2>Chat System</h2>
<p>Multiple chat channels keep communication organized.</p>

<table>
  <tr><th>Channel</th><th>Command</th><th>Visibility</th></tr>
  <tr><td>Global</td><td><code>/g &lt;msg&gt;</code></td><td>All players</td></tr>
  <tr><td>Country</td><td><code>/cc &lt;msg&gt;</code></td><td>Country members only</td></tr>
  <tr><td>Alliance</td><td><code>/ac &lt;msg&gt;</code></td><td>Allied countries</td></tr>
  <tr><td>Local</td><td><code>/l &lt;msg&gt;</code></td><td>Players within 100 blocks</td></tr>
</table>
`,

/* ────────────── DUELS ────────────── */
duel: `
<h2>Duels</h2>
<p>Challenge other players to fair 1v1 combat.</p>

<ul>
  <li><code>/duel &lt;player&gt;</code> — Send a duel request</li>
  <li>Both teleported to an arena</li>
  <li>Inventory saved and restored after</li>
  <li>Winner earns money</li>
</ul>
`,

/* ────────────── RESUMES ────────────── */
resume: `
<h2>Resumes &amp; Recruitment</h2>
<p>Players looking for a country can post resumes; leaders can recruit.</p>
<ul>
  <li>Post your resume with skills and experience</li>
  <li>Country leaders browse available players</li>
  <li>Send recruitment invites directly</li>
</ul>
`,

/* ────────────── POLLS ────────────── */
polls: `
<h2>Polls</h2>
<p>Country leaders can create polls for members to vote on decisions.</p>
<ul>
  <li>Useful for democratic government types</li>
  <li>Results displayed after poll closes</li>
</ul>
`,

/* ────────────── DISCORD ────────────── */
discord: `
<h2>Discord Link</h2>
<p>Link your Minecraft account to Discord for cross-platform features.</p>

<h3>Features</h3>
<ul>
  <li>Synced roles based on in-game rank</li>
  <li>Country channels in Discord</li>
  <li>War notifications and alerts</li>
  <li>Cross-chat between Discord and in-game</li>
</ul>

<p>Use <code>/discord link</code> in-game to get started.</p>
`,

/* ────────────── EVENTS ────────────── */
events: `
<h2>Server Events</h2>
<p>Regular server-wide events with unique rewards.</p>

<table>
  <tr><th>Event</th><th>Description</th></tr>
  <tr><td>Capture the Flag</td><td>Team-based CTF, country vs country</td></tr>
  <tr><td>King of the Hill</td><td>Hold a location to earn points</td></tr>
  <tr><td>Boss Raids</td><td>Server-wide boss with shared loot</td></tr>
  <tr><td>Build Competition</td><td>Judged building contests</td></tr>
  <tr><td>War Games</td><td>Practice wars, no permanent consequences</td></tr>
</table>

<p>Check <code>/events</code> for upcoming events. Announcements also go out on Discord.</p>
`,

/* ────────────── SAFE ZONES ────────────── */
safezones: `
<h2>Safe Zones &amp; Moshpits</h2>

<h3>Safe Zones</h3>
<ul>
  <li>PvP disabled, players are safe</li>
  <li>Cannot enter while combat tagged</li>
  <li>No block breaking/placing</li>
  <li>Villagers are protected from all harm</li>
</ul>

<h3>Moshpit Zones</h3>
<div class="card">
  <p>Dedicated free-for-all PvP arenas. Protection plugins are overridden.</p>
  <ul>
    <li>Free-for-all combat</li>
    <li>No combat tag restrictions for entry/exit</li>
    <li>Popular for practice and tournaments</li>
  </ul>
</div>
`,

/* ────────────── PORTALS ────────────── */
portals: `
<h2>Portals &amp; Nether</h2>
<p>The Nether is accessible and plays a role in resource gathering and warfare.</p>
<ul>
  <li>Standard Nether portals work as expected</li>
  <li>Claims can extend into the Nether</li>
  <li>Special portal locations around the map</li>
</ul>
`,

/* ────────────── TERRITORY ────────────── */
territory: `
<h2>Territory Mechanics</h2>

<h3>Entry Notifications</h3>
<p>Entering another country's territory shows the country name, relationship, and danger status.</p>

<h3>Permissions</h3>
<ul>
  <li>Outsiders cannot build, break, or interact in claimed land</li>
  <li>During war, attackers gain limited siege access</li>
  <li>Allies may have configurable access</li>
</ul>

<h3>Scoreboard</h3>
<p>The sidebar shows country info, balance, territory name, and active wars at a glance.</p>
`,

/* ────────────── HOLOGRAMS ────────────── */
holograms: `
<h2>Holograms</h2>
<p>Floating text displays for information and decoration.</p>
<ul>
  <li>Country capitals display holographic signs</li>
  <li>Leaderboards at spawn</li>
  <li>Custom holograms by admins</li>
</ul>
`,

/* ────────────── ADMIN (Restricted) ────────────── */
"admin-info": `
<h2>Admin &amp; Configuration</h2>
<div class="info-box warn">This section is restricted to server administrators. If you need access, contact a server admin.</div>
<p>Administration tools, configuration files, and management commands are available in-game for players with the <code>countrywars.admin</code> permission.</p>
`,

/* ────────────── ALL COMMANDS ────────────── */
commands: `
<h2>All Commands</h2>

<h3>Country Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c create &lt;name&gt;</code></td><td>Create a country</td></tr>
  <tr><td><code>/c join &lt;name&gt;</code></td><td>Request to join</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave country</td></tr>
  <tr><td><code>/c claim</code></td><td>Claim a chunk</td></tr>
  <tr><td><code>/c unclaim</code></td><td>Unclaim a chunk</td></tr>
  <tr><td><code>/c info [name]</code></td><td>View country info</td></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite player</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Kick member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Promote</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Demote</td></tr>
  <tr><td><code>/c spawn</code></td><td>Teleport to country spawn</td></tr>
  <tr><td><code>/c setspawn</code></td><td>Set country spawn</td></tr>
  <tr><td><code>/c fly</code></td><td>Toggle flight (requires perk)</td></tr>
  <tr><td><code>/c wall</code></td><td>Wall management</td></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Alliance request</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark as enemy</td></tr>
  <tr><td><code>/c deposit &lt;amt&gt;</code></td><td>Deposit to treasury</td></tr>
  <tr><td><code>/c disband</code></td><td>Disband (Leader only)</td></tr>
</table>

<h3>War &amp; Siege</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/war declare &lt;country&gt;</code></td><td>Declare war</td></tr>
  <tr><td><code>/war status</code></td><td>View active wars</td></tr>
  <tr><td><code>/war continue</code></td><td>Extend war</td></tr>
  <tr><td><code>/war surrender</code></td><td>Surrender</td></tr>
  <tr><td><code>/siege start</code></td><td>Begin sieging chunk</td></tr>
</table>

<h3>Economy</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open shop GUI</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell held item</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell all sellable items</td></tr>
  <tr><td><code>/bal</code></td><td>Check balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amt&gt;</code></td><td>Send money</td></tr>
  <tr><td><code>/bounty set &lt;player&gt; &lt;amt&gt;</code></td><td>Place bounty</td></tr>
  <tr><td><code>/coinflip &lt;amt&gt;</code></td><td>Start coinflip</td></tr>
  <tr><td><code>/trade &lt;player&gt;</code></td><td>Trade request</td></tr>
</table>

<h3>Personal</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/skills</code></td><td>Open skills GUI</td></tr>
  <tr><td><code>/kit</code></td><td>Kit menu</td></tr>
  <tr><td><code>/pv</code></td><td>Player vault</td></tr>
  <tr><td><code>/sethome &lt;name&gt;</code></td><td>Set home</td></tr>
  <tr><td><code>/home &lt;name&gt;</code></td><td>Go to home</td></tr>
  <tr><td><code>/duel &lt;player&gt;</code></td><td>Duel request</td></tr>
  <tr><td><code>/tutorial</code></td><td>Replay tutorial</td></tr>
  <tr><td><code>/playtime</code></td><td>Check playtime</td></tr>
  <tr><td><code>/discord link</code></td><td>Link Discord</td></tr>
  <tr><td><code>/wiki</code></td><td>Open the server wiki</td></tr>
</table>

`

};

/* ================================================================
   DOM Injection  –  Build sections inside #wikiContent
   ================================================================ */
(function injectSections() {
  var container = document.getElementById('wikiContent');
  if (!container) return;

  for (var id in WIKI) {
    if (!WIKI.hasOwnProperty(id)) continue;
    var sec = document.createElement('div');
    sec.className = 'wiki-section';
    sec.id = id;
    sec.innerHTML = WIKI[id];
    container.appendChild(sec);
  }

  var hash = window.location.hash.substring(1);
  var startId = (hash && document.getElementById(hash)) ? hash : 'home';
  document.getElementById(startId).classList.add('active');

  var link = document.querySelector('.nav-link[data-section="' + startId + '"]');
  if (link) link.classList.add('active');
})();
