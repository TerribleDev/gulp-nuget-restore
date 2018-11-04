import { Verbosity } from "./verbosity";

/**
 * 
 * 
 * @export
 * @interface IOptions
 */
export interface IOptions {
    
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    nugetPath?: string;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    monoPath?: string;
    /**
     * Checks if package restore consent is granted before installing a package.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    requireConsent?: boolean;
    /**
     * 
     *  Timeout in seconds for resolving project to project references.
     * @type {number}
     * @memberof IOptions
     */
    project2ProjectTimeOut?: number;
    /**
     * 
     * Specifies the packages folder.
     * @type {string}
     * @memberof IOptions
     */
    packagesDirectory?: string;
    /**
     * 
     * Specifies the solution directory. Not valid when restoring packages for a solution.
     * @type {string}
     * @memberof IOptions
     */
    solutionDirectory?: string;
    /**
     * Specifies the version of MSBuild to be used with this command. 
     * Supported values are 4, 12, 14. By default the MSBuild in your path is picked, 
     * otherwise it defaults to the highest installed version of MSBuild.
     * 
     * @type {string}
     * @memberof IOptions
     */
    msbuildVersion?: string;
    /**
     * 
     * Specifies the path of MSBuild to be used with this command
     * . This command will takes precedence over MSbuildVersion,nuget will always pick MSbuild from this specified path.
     * @type {string}
     * @memberof IOptions
     */
    msbuildPath?: string;
    /**
     * 
     * Restore all referenced projects for UWP and NETCore projects. This does not include packages.config projects.
     * @type {boolean}
     * @memberof IOptions
     */
    recursive?: boolean;
    /**
     * Forces all dependencies to be resolved even if the last restore was successful. 
     * This is equivalent to deleting project.assets.json. (Does not apply to packages.config)
     * @type {boolean}
     * @memberof IOptions
     */
    force?: boolean;
    /**
     * 
     * A list of packages sources to use for this command.
     * @type {string[]}
     * @memberof IOptions
     */
    source?: string[];
    /**
     * 
     * A list of package sources to use as fallbacks for this command.
     * 
     * @type {string[]}
     * @memberof IOptions
     */
    fallbackSource?: string[];
    /**
     * 
     *  
     * Disable using the machine cache as the first package source.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    noCache?: boolean;
    /**
     * 
     * Download directly without populating any caches with metadata or binaries.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    directDownload?: boolean;
    /**
     * 
     * Disable parallel processing of packages for this command.
     * 
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    disableParallelProcessing?: boolean;
    /**
     * 
     * Specifies types of files to save after package installation: nuspec, nupkg, nuspec;nupkg.
     * @type {string}
     * @memberof IOptions
     */
    packageSaveMode?: string;
    /**
     * 
     * Display this amount of details in the output: normal, quiet, detailed.
     * @type {Verbosity}
     * @memberof IOptions
     */
    verbosity?: Verbosity;
    /**
     * 
     * Do not prompt for user input or confirmations.
     * @type {boolean}
     * @memberof IOptions
     */
    nonInteractive?: boolean;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    configFile?: string;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    forceEnglishOutput?: string;
    /**
     * 
     * 
     * @type {string[]}
     * @memberof IOptions
     */
    additionalArgs?: string[];

}

export class Options implements IOptions{
      /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    public nugetPath?: string;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    public monoPath?: string;
    /**
     * Checks if package restore consent is granted before installing a package.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    public requireConsent?: boolean;
    /**
     * 
     *  Timeout in seconds for resolving project to project references.
     * @type {number}
     * @memberof IOptions
     */
    public project2ProjectTimeOut?: number;
    /**
     * 
     * Specifies the packages folder.
     * @type {string}
     * @memberof IOptions
     */
    public packagesDirectory?: string;
    /**
     * 
     * Specifies the solution directory. Not valid when restoring packages for a solution.
     * @type {string}
     * @memberof IOptions
     */
    public solutionDirectory?: string;
    /**
     * Specifies the version of MSBuild to be used with this command. 
     * Supported values are 4, 12, 14. By default the MSBuild in your path is picked, 
     * otherwise it defaults to the highest installed version of MSBuild.
     * 
     * @type {string}
     * @memberof IOptions
     */
    public msbuildVersion?: string;
    /**
     * 
     * Specifies the path of MSBuild to be used with this command
     * . This command will takes precedence over MSbuildVersion,nuget will always pick MSbuild from this specified path.
     * @type {string}
     * @memberof IOptions
     */
    public msbuildPath?: string;
    /**
     * 
     * Restore all referenced projects for UWP and NETCore projects. This does not include packages.config projects.
     * @type {boolean}
     * @memberof IOptions
     */
    public recursive?: boolean;
    /**
     * Forces all dependencies to be resolved even if the last restore was successful. 
     * This is equivalent to deleting project.assets.json. (Does not apply to packages.config)
     * @type {boolean}
     * @memberof IOptions
     */
    public force?: boolean;
    /**
     * 
     * A list of packages sources to use for this command.
     * @type {string[]}
     * @memberof IOptions
     */
    public source?: string[];
    /**
     * 
     * A list of package sources to use as fallbacks for this command.
     * 
     * @type {string[]}
     * @memberof IOptions
     */
    public fallbackSource?: string[];
    /**
     * 
     *  
     * Disable using the machine cache as the first package source.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    public noCache?: boolean;
    /**
     * 
     * Download directly without populating any caches with metadata or binaries.
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    public directDownload?: boolean;
    /**
     * 
     * Disable parallel processing of packages for this command.
     * 
     * 
     * @type {boolean}
     * @memberof IOptions
     */
    public disableParallelProcessing?: boolean;
    /**
     * 
     * Specifies types of files to save after package installation: nuspec, nupkg, nuspec;nupkg.
     * @type {string}
     * @memberof IOptions
     */
    public packageSaveMode?: string;
    /**
     * 
     * Display this amount of details in the output: normal, quiet, detailed.
     * @type {Verbosity}
     * @memberof IOptions
     */
    public verbosity?: Verbosity;
    /**
     * 
     * Do not prompt for user input or confirmations.
     * @type {boolean}
     * @memberof IOptions
     */
    public nonInteractive?: boolean;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    public configFile?: string;
    /**
     * 
     * 
     * @type {string}
     * @memberof IOptions
     */
    public forceEnglishOutput?: string;
    /**
     * 
     * 
     * @type {string[]}
     * @memberof IOptions
     */
    public additionalArgs?: string[];
}
