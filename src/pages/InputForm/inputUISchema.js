import React from 'react'
export default {
    TimeFrame: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#timeframe">Docs</a>)<br />
                Specifies specific point of time and duration of time (positive or negative) to retrieve.
            </div>
        ),
        MarkDate: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#markdate">Docs</a>)<br />
                    Specifies the Date component of DateTime indicating from which point to begin measuring.
                    <br /><br />
                    Supports any standard .NET DateTime string <a href="Link">https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings</a> for date format as well as some relative tokens:
                    <br /><br />
                    <table role="table">
                        <thead>
                            <tr>
                                <th>Date Value</th>
                                <th>Meaning of Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-05-05</td>
                                <td>May 5, local time</td>
                            </tr>
                            <tr>
                                <td>2020-05-05Z</td>
                                <td>May 5, GMT</td>
                            </tr>
                            <tr>
                                <td>TODAY</td>
                                <td>The current day, local time</td>
                            </tr>
                            <tr>
                                <td>TODAY_Z</td>
                                <td>The current day, GMT</td>
                            </tr>
                            <tr>
                                <td>YESTERDAY</td>
                                <td>Day before current day (today - 1 days)</td>
                            </tr>
                            <tr>
                                <td>YESTERDAY_Z</td>
                                <td>Day before current day, GMT</td>
                            </tr>
                            <tr>
                                <td>DAY_BEFORE_YESTERDAY</td>
                                <td>Day before yesterday (today - 2 days)</td>
                            </tr>
                            <tr>
                                <td>DAY_BEFORE_YESTERDAY_Z</td>
                                <td>Day before yesterday, GMT</td>
                            </tr>
                            <tr>
                                <td>SAME_DAY_LAST_WEEK</td>
                                <td>Week ago</td>
                            </tr>
                            <tr>
                                <td>SAME_DAY_LAST_WEEK_Z</td>
                                <td>Week ago, GMT</td>
                            </tr>
                            <tr>
                                <td>MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY</td>
                                <td>Specific day of the week, going back from today. If today is Wednesday, MONDAY will be this week's Monday (today - 2 days). If today is Wednesday, THURSDAY will be last week's Thursday  (today - 6 days)</td>
                            </tr>
                            <tr>
                                <td>MONDAY_Z, TUESDAY_Z, WEDNESDAY_Z, THURSDAY_Z, FRIDAY_Z, SATURDAY_Z, SUNDAY_Z</td>
                                <td>Same as above, GMT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
        },
        MarkTime: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#marktime">Docs</a>)<br />
                    Specifies the Time component of DateTime indicating from which point to begin measuring.
                    <br /><br />
                    Supports any standard .NET DateTime string <a href="Link">https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings</a> for time format as well as some relative tokens:
                    <br /><br />
                    <table role="table">
                        <thead>
                            <tr>
                                <th>Time Value</th>
                                <th>Meaning of Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14:00:00</td>
                                <td>2PM, local time</td>
                            </tr>
                            <tr>
                                <td>14:00:00Z</td>
                                <td>2PM, GMT</td>
                            </tr>
                            <tr>
                                <td>00:00:00</td>
                                <td>Start of the day midnight, local time</td>
                            </tr>
                            <tr>
                                <td>00:00:00Z</td>
                                <td>Start of the day midnight, local time</td>
                            </tr>
                            <tr>
                                <td>07:15:00-04:00</td>
                                <td>7:15 AM Eastern Time (-4 hour offset)</td>
                            </tr>
                            <tr>
                                <td>NOW</td>
                                <td>Current time, rounded to the current minute, local time. If NOW is 15:32:35, NOW is 15:32:00</td>
                            </tr>
                            <tr>
                                <td>NOW_Z</td>
                                <td>Current time, rounded to the current minute, GMT</td>
                            </tr>
                            <tr>
                                <td>CURRENT_HOUR</td>
                                <td>Beginning of the current hour, local time. If NOW is 15:32:00, CURRENT_HOUR is 15:00:00</td>
                            </tr>
                            <tr>
                                <td>CURRENT_HOUR_Z</td>
                                <td>Beginning of the current hour, GMT</td>
                            </tr>
                            <tr>
                                <td>PREVIOUS_HOUR</td>
                                <td>Beginning of the previous hour, GMT. If NOW is 15:32:00, CURRENT_HOUR is 14:00:00</td>
                            </tr>
                            <tr>
                                <td>PREVIOUS_HOUR_Z</td>
                                <td>Beginning of the previous hour, GMT</td>
                            </tr>
                            <tr>
                                <td>DAY_OF_MONTH_#</td>
                                <td>Specific day of month. # is between 1 and 31. If month has less days, high number means the actual day</td>
                            </tr>
                            <tr>
                                <td>DAY_OF_MONTH_#_Z</td>
                                <td>Specific day of month, GMT</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            ),
        },
        Duration: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#duration">Docs</a>)<br />
                    Specifies the Duration of time period before or after the DateTime indicating from which point to begin measuring.
                    <br /><br />
                    Can be positive or negative and can be specified in either .NET TimeSpan or ISO 8601 Duration form.
                    <br />
                    <b>.NET TimeSpan</b>
                    <table role="table">
                        <thead>
                            <tr>
                                <th>Duration Value</th>
                                <th>Meaning of Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0:15 or 0:15:00</td>
                                <td>15 minutes</td>
                            </tr>
                            <tr>
                                <td>-0:15 or -0:15:00</td>
                                <td>Negative 15 minutes</td>
                            </tr>
                            <tr>
                                <td>1:00 or 1:00:00</td>
                                <td>1 hour</td>
                            </tr>
                            <tr>
                                <td>1:15 or 1:15:00</td>
                                <td>1 hour 15 minutes</td>
                            </tr>
                            <tr>
                                <td>1.01:15 or 1.01:15:00</td>
                                <td>1 day, 1 hour 15 minutes</td>
                            </tr>
                            <tr>
                                <td>1.01:15:15</td>
                                <td>1 day, 1 hour, 15 minutes and 15 seconds</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <b>ISO 8601 Duration</b>
                    <table role="table">
                        <thead>
                            <tr>
                                <th>Duration Value</th>
                                <th>Meaning of Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PT15M</td>
                                <td>15 minutes</td>
                            </tr>
                            <tr>
                                <td>-PT15M</td>
                                <td>Negative 15 minutes</td>
                            </tr>
                            <tr>
                                <td>PT1H or PT60M</td>
                                <td>1 hour</td>
                            </tr>
                            <tr>
                                <td>PT1H15M or PT75M</td>
                                <td>1 hour 15 minutes</td>
                            </tr>
                            <tr>
                                <td>P1DT1H15M or PT1515M</td>
                                <td>1 day, 1 hour 15 minutes</td>
                            </tr>
                            <tr>
                                <td>P1DT1H15M15S</td>
                                <td>1 day, 1 hour, 15 minutes and 15 seconds</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
        },
    },
    UsersGroupsRolesPermissions: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#usersgroupsrolespermissions-boolean">Docs</a>)<br />
                Specifies whether to extract and index Users, Groups, Roles and Permissions for the Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Dashboards: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#dashboards-boolean">Docs</a>)<br />
                Specifies whether to extract and index Dashboards, Widgets and Time Series used by Widgets for the Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Licenses: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#licenses-boolean">Docs</a>)<br />
                Specifies whether to extract and index informaiton about global account and license rule configuration and consumption for Controller.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Events: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#events-boolean">Docs</a>)<br />
                Specifies whether to extract and index Events and Health Rule Violations for All Applications, Controller Notifications and Controller Audit Events.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EventsSelectionCriteria: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#eventsselectioncriteria-array-of-strings">Docs</a>)<br />
                Selects which event types to extract.
            </div>
        ),
        'ui:options': {
            orderable: false,
        },
    },
    Configuration: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configuration-boolean">Docs</a>)<br />
                Specifies whether to extract and index configuration (BT rules, Backend rules, Data Collectors for APM, Web Page Rules for Web, and so on).
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    ConfigurationComparisonReferenceAPM: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferenceapmcontroller-and-configurationcomparisonreferenceapmapplication-string">Docs</a>)<br />
                Specifies which Application to use as reference during configuration comparison. If Controller and Application are blank, then configuration comparison is performed against a blank template application.
            </div>
        ),
    },
    ConfigurationComparisonReferenceWEB: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencewebcontroller-and-configurationcomparisonreferencewebapplication-string">Docs</a>)<br />
                Specifies which Application to use as reference during configuration comparison. If Controller and Application are blank, then configuration comparison is performed against a blank template application.
            </div>
        ),
    },
    ConfigurationComparisonReferenceMOBILE: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencemobilecontroller-and-configurationcomparisonreferencemobileapplication-string">Docs</a>)<br />
                Specifies which Application to use as reference during configuration comparison. If Controller and Application are blank, then configuration comparison is performed against a blank template application.
            </div>
        ),
    },
    ConfigurationComparisonReferenceDB: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#configurationcomparisonreferencedbcontroller-and-configurationcomparisonreferencedbapplication-string">Docs</a>)<br />
                Specifies which Application to use as reference during configuration comparison. If Controller and Application are blank, then configuration comparison is performed against a blank template application.
            </div>
        ),
    },
    DetectedEntities: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#detectedentities-boolean">Docs</a>)<br />
                Extract detected entities for this application type.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    Metrics: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metrics-boolean">Docs</a>)<br />
                Specified whether to extract and index summary and detail metrics for all Entities, which are used in Entity Metrics, Entity Metric Graphs and Entity Details report. Used in conjunction with MetricsSelectionCriteria.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    MetricsSelectionCriteria: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metricsselectioncriteria">Docs</a>)<br />
                Provides filtering abilities for the metric extraction.
            </div>
        ),
        MetricSets: {
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#metricsets-array-of-strings">Docs</a>)<br />
                    Selects which sets of metrics to export.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        IncludeHourAndMinuteDetail: {
            'ui:widget': 'radio',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#includehourandminutedetail-boolean">Docs</a>)<br />
                    Specifies whether to extract granular metric detail.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
    },
    Flowmaps: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#flowmaps-boolean">Docs</a>)<br />
                Specifies whether to extract and index flow maps for APM Entities (Application, Tier, Node, Business Transaction and Backend).
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityDashboards: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteria">Docs</a>)<br />
                Specifies whether to take screenshots of the main screen for APM Entities (Application, Tier, Node, Business Transaction and Backend).
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    EntityDashboardSelectionCriteria: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriatiers-array-of-strings">Docs</a>)<br />
                Selects which APM entities to take screenshots on.
            </div>
        ),
        Tiers: {
            'ui:title': 'EntityDashboardSelectionCriteria\\Tiers',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriatiers-array-of-strings">Docs</a>)<br />
                    Filters screenshot taking to only ones these Tiers. Regular expressions are supported.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        TierTypes: {
            'ui:title': 'EntityDashboardSelectionCriteria\\TierTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriatiertypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Tier Type. Each of the settings specifies the type of Tier which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        BusinessTransactions: {
            'ui:title': 'EntityDashboardSelectionCriteria\\BusinessTransactions',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriabusinesstransactions-array-of-strings">Docs</a>)<br />
                    Filters screenshot taking to only ones these Business Transactions. Regular expressions are supported.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        BusinessTransactionTypes: {
            'ui:title': 'EntityDashboardSelectionCriteria\\BusinessTransactionTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriabusinesstransactiontypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Business Transaction Type. Each of the settings specifies the type of Business Transaction which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        Nodes: {
            'ui:title': 'EntityDashboardSelectionCriteria\\Nodes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriterianodes-array-of-strings">Docs</a>)<br />
                    Filters screenshot taking to only ones these Nodes. Regular expressions are supported.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        NodeTypes: {
            'ui:title': 'EntityDashboardSelectionCriteria\\NodeTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriterianodetypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Node Type. Each of the settings specifies the type of Node which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        Backends: {
            'ui:title': 'EntityDashboardSelectionCriteria\\Backends',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriabackends-array-of-strings">Docs</a>)<br />
                    Filters screenshot taking to only ones these Backends. Regular expressions are supported.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        BackendTypes: {
            'ui:title': 'EntityDashboardSelectionCriteria\\BackendTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#entitydashboardselectioncriteriabackendtypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Backend Type. Each of the settings specifies the type of Backend which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
    },
    Snapshots: {
        'ui:widget': 'radio',
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshots-boolean">Docs</a>)<br />
                Specifies whether to retrieve Snapshots for all Business Transactions. Used in conjunction with SnapshotSelectionCriteria.
            </div>
        ),
        'ui:options': {
            inline: true,
        },
    },
    SnapshotSelectionCriteria: {
        'ui:description': (
            <div>
                (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriatiers-array-of-strings">Docs</a>)<br />
                Selects which snapshots to export.
            </div>
        ),
        Tiers: {
            'ui:title': 'SnapshotSelectionCriteria\\Tiers',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriatiers-array-of-strings">Docs</a>)<br />
                    Filters Snapshots to be extracted to only ones originating from these Tiers. Regular expressions are supported
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        TierTypes: {
            'ui:title': 'SnapshotSelectionCriteria\\TierTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriatiertypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Tier Type. Each of the settings specifies the type of Tier which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        BusinessTransactions: {
            'ui:title': 'SnapshotSelectionCriteria\\BusinessTransactions',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriabusinesstransactions-array-of-strings">Docs</a>)<br />
                    Filters Snapshots to be extracted to only ones originating from these Business Transactions. Regular expressions are supported
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        BusinessTransactionTypes: {
            'ui:title': 'SnapshotSelectionCriteria\\BusinessTransactionTypes',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriabusinesstransactiontypes-array-of-strings">Docs</a>)<br />
                    Contains settings for filtering by Business Transaction Type. Each of the settings specifies the type of Business Transaction which will be included.
                </div>
            ),
            'ui:options': {
                inline: true,
            },
        },
        RequestIDs: {
            'ui:title': 'SnapshotSelectionCriteria\\RequestIDs',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriarequestids-array-of-strings">Docs</a>)<br />
                    Selects which Business Transaction snapshots identified by the RequestID GUID to extract.
                </div>
            ),
            'ui:options': {
                orderable: false,
            },
        },
        UserExperience: {
            'ui:title': 'SnapshotSelectionCriteria\\UserExperience',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriauserexperiencesetting-boolean">Docs</a>)<br />
                    Contains settings for filtering by User Experience
                </div>
            ),
        },
        SnapshotType: {
            'ui:title': 'SnapshotSelectionCriteria\\SnapshotType',
            'ui:description': (
                <div>
                    (<a href="https://github.com/Appdynamics/AppDynamics.DEXTER/wiki/Job-File#snapshotselectioncriteriasnapshottypesetting-boolean">Docs</a>)<br />
                    Contains settings for filtering by Snapshot Type
                </div>
            ),
        },
    }
}
