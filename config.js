/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212617503205'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Evil Imranos'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Evil Imranos Bot',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXbOiOBD9K1N51RpFrohW3apFRERUQMQPtuYhQoDIRzAJ+DHlf5/Ce+/MPOzO3n1L0qnTp/uc7u+gIJghE93A6DsoKa4hR82R30oERmBcRRGioA1CyCEYAVdzTt2LsDpsbQUdqOfuzWu2OFkiFOKAc346RdxqFXLcPbyCRxuU1THDwR8A6e0OU3Ibm6wqdt3r5jwnHSVCu9q9i0Yn6UVkeu0bibTD7BU8GkSIKS5irUxQjijMTHSzIaafo98zmHPt9CTeCc6+G2o7atkDsu3PUJC4ORFcOFs4vWVH6Mmfoz/jjPr7qequlxOLJOlaXgzPR9+fLocsGF+HVDlizfUvmee80Wc4LlBohKjgmN8+3XdZPdnidbpmZwOFk2zn0s35vm7BbUYOhtMtxRlq6ed8anuXzxGv7AKn1wNeDleuM4ymYqAlHatoQXvYtXQ0TxyyT2X0ol6D34nb9MMr6f/pu7w6W3UI8722VDulpkz685bO8apeRN4pOFys+cVo2Qeqpp+0jT7r+ftUlCWzwg70Z+opn9K7IIliflyyvv+iCrWHs/7iKeQ7fcgr+ieWyUqcSH4xH/SIlO7WpmM6TIrzbvfC9nnQDeG1pauKzm2t7O/uK4j57DDtU8UfM+TYuXWOlLAfbKXOZFIa/kU+D8waX16fFaXoZoRgJDzagKIYM04hx6R4vkm9NoBh7aKAIv5sL6Dj6WTCt8OL5HXy/QVFXm6FqzTKZrtry1vdWmdCh61ezlj3FbRBSUmAGEPhDDNO6G2JGIMxYmD097c2KNCVvwnXpBOFNogwZdwrqjIjMPxQ9SMIg4BUBXdvRaA2B0TBqPvrGXGOi5g1fawKSIME10hNIGdgFMGMoZ8VIopCMOK0Qj+nViVh03hTl+fSyu6BNsifguCwGU6hJwmDflfsdfsjSfyLfb00sLAsvxaIgzYoYPMbaDXOvhg5hQVhX8akiWRPAEEQB3Jv8CKKA0kQxAajCTx+cm9ShYhDnDEwAqotpXngTTSjdgu+1HVFixU1VsCvWj9M8yYKG449qLWwU7kKiUTebR1Ndd7ZXfnG3MwOSJb2sbDWUaA6r/8A0jAk7i7waUcUp5N65e/qVRblSySS2tUXlaNb0Lqmg0tldjbhwM/3pR+fE+2uH/nxZJFj2kpJp+LmQJOLXE9Nb1JzQ41fm2whqnGAfk8m+4dbRfBiGrOaBEhfEt1Lw0Up79hJePGSnaabw82lr0bS8RAWincfylU0gduJ8XKCZyImc+Kb5qUSDrPKEWalQ+eJ82bn5zhl72sMP43WqNhcI4yeW+Fdrf9U9Y14Y77uo/0bxvue+ZdZHR9tZ6snNkkXaWzOhoPQzm8xjgR29G7ptTerrexl5a2LQknB4/GtDcoM8ojQvBEyP0LQBpRUjZWNIiJ/yKQqqTF24kVTdgYZV36NxwbniHGYl2AkDOS+MJBFuf/4ARSmjcpUBwAA',
    newsletterJid: '120363160757210405@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Evil Imranos Stickers',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
