import gcp from '../assets/svg/skills/gcp.svg'
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import docker from '../assets/svg/skills/docker.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from '../assets/svg/skills/react.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import capacitorjs from '../assets/svg/skills/capacitorjs.svg'
import coffeescript from '../assets/svg/skills/coffeescript.svg'
import memsql from '../assets/svg/skills/memsql.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'

import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import dart from '../assets/svg/skills/dart.svg'
import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
import julia from '../assets/svg/skills/julia.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import ruby from '../assets/svg/skills/ruby.svg'
import swift from '../assets/svg/skills/swift.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        default:
            break;
    }
}