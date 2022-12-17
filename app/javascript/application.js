// Entry point for the build script in your package.json
import "styleseets/application"

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../css/tailwind.css"
import "../../assets/stylesheets/application.css"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
