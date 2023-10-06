config.load_autoconfig()
config.source('qutewal.py')


## Misc. ##

# Always restore open sites when qutebrowser is reopened.
c.auto_save.session = True

# Prefer dark color schemes
c.colors.webpage.preferred_color_scheme = 'dark'
#c.colors.webpage.darkmode.enabled = True

# Require a confirmation before quitting the application if downloads are active.
c.confirm_quit = ["downloads"]

# Use neovim in alacritty as an editor
c.editor.command = ["alacritty", "-t", "qutebrowser editor", "-e",
                    "nvim", "{}", "+call cursor({line},{column0})"]

# Font settings
c.fonts.default_family = 'Source Code Pro'
c.fonts.default_size   = '11pt'

# Enable hidpi mode
c.qt.highdpi = True

# Enable smooth scrolling
c.scrolling.smooth = True

