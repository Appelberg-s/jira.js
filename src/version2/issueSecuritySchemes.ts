import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class IssueSecuritySchemes {
  constructor(private client: Client) { }
  /**
     * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async getIssueSecuritySchemes<T = Models.SecuritySchemes>(callback?: Callback<T>): Promise<void>;
  /**
     * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async getIssueSecuritySchemes<T = Models.SecuritySchemes>(callback?: undefined): Promise<T>;
  async getIssueSecuritySchemes<T = Models.SecuritySchemes>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/rest/api/2/issuesecurityschemes',
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getIssueSecuritySchemes' });
  }
  /**
     * Returns an issue security scheme along with its security levels.
     *
     * **[Permissions](#permissions) required:**
     *
     *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     *  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme. */
  async getIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetIssueSecurityScheme, callback: Callback<T>): Promise<void>;
  /**
     * Returns an issue security scheme along with its security levels.
     *
     * **[Permissions](#permissions) required:**
     *
     *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     *  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme. */
  async getIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetIssueSecurityScheme, callback?: undefined): Promise<T>;
  async getIssueSecurityScheme<T = Models.SecurityScheme>(parameters: Parameters.GetIssueSecurityScheme, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/2/issuesecurityschemes/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getIssueSecurityScheme' });
  }
}