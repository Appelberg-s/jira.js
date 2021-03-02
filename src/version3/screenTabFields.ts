import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback } from '../callback';
import { RequestConfig } from '../requestConfig';

export class ScreenTabFields {
  constructor(private client: Client) { }
  /**
     * Returns all fields for a screen tab.
     *
     * **[Permissions](#permissions) required:**
     *
     *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     *  *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme. */
  async getAllScreenTabFields<T = unknown>(parameters: Parameters.GetAllScreenTabFields, callback: Callback<T>): Promise<void>;
  /**
     * Returns all fields for a screen tab.
     *
     * **[Permissions](#permissions) required:**
     *
     *  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     *  *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme. */
  async getAllScreenTabFields<T = unknown>(parameters: Parameters.GetAllScreenTabFields, callback?: undefined): Promise<T>;
  async getAllScreenTabFields<T = unknown>(parameters: Parameters.GetAllScreenTabFields, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}/fields`,
      method: 'GET',
      params: {
        projectKey: parameters.projectKey,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getAllScreenTabFields' });
  }
  /**
     * Adds a field to a screen tab.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async addScreenTabField<T = Models.ScreenableField>(parameters: Parameters.AddScreenTabField, callback: Callback<T>): Promise<void>;
  /**
     * Adds a field to a screen tab.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async addScreenTabField<T = Models.ScreenableField>(parameters: Parameters.AddScreenTabField, callback?: undefined): Promise<T>;
  async addScreenTabField<T = Models.ScreenableField>(parameters: Parameters.AddScreenTabField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}/fields`,
      method: 'POST',
      data: {
        fieldId: parameters.fieldId,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'addScreenTabField' });
  }
  /**
     * Removes a field from a screen tab.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async removeScreenTabField<T = void>(parameters: Parameters.RemoveScreenTabField, callback: Callback<T>): Promise<void>;
  /**
     * Removes a field from a screen tab.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async removeScreenTabField<T = void>(parameters: Parameters.RemoveScreenTabField, callback?: undefined): Promise<T>;
  async removeScreenTabField<T = void>(parameters: Parameters.RemoveScreenTabField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}/fields/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'removeScreenTabField' });
  }
  /**
     * Moves a screen tab field.
     *
     * If `after` and `position` are provided in the request, `position` is ignored.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async moveScreenTabField<T = void>(parameters: Parameters.MoveScreenTabField, callback: Callback<T>): Promise<void>;
  /**
     * Moves a screen tab field.
     *
     * If `after` and `position` are provided in the request, `position` is ignored.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  async moveScreenTabField<T = void>(parameters: Parameters.MoveScreenTabField, callback?: undefined): Promise<T>;
  async moveScreenTabField<T = void>(parameters: Parameters.MoveScreenTabField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/rest/api/3/screens/${parameters.screenId}/tabs/${parameters.tabId}/fields/${parameters.id}/move`,
      method: 'POST',
      data: {
        after: parameters.after,
        position: parameters.position,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'moveScreenTabField' });
  }
}